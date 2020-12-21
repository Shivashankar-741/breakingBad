import React from "react";
import "./App.css";
import image from "./images/breakingBad.png";

const App = () => {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		console.log("hooks working");
		fetch(`https://breakingbadapi.com/api/characters`)
			.then((response) => response.json())
			.then((result) => setData(result));
	}, []);

	const characterName = (e) => {
		console.log(e.target.value);
		fetch(`https://breakingbadapi.com/api/characters?name=${e.target.value}`)
			.then((response) => response.json())
			.then((result) => setData(result));
	};

	return (
		<div className="App">
			<div className="app--img">
				<img src={image} alt="" className="app--img__in" />
			</div>
			<div className="inputField">
				<input
					type="text"
					placeholder="Search characters..."
					className="inputField--in"
					onChange={characterName}
				/>
			</div>
			<ul className="cards">
				{data.map((el, idx) => (
					<li className="flip-card" key={idx}>
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<img src={el.img} alt="characters" className="flip-card-img" />
							</div>
							<div className="flip-card-back">
								<h1>{el.name}</h1>
								<h3>Nickname:{el.nickname}</h3>
								<h3>status:{el.status}</h3>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
