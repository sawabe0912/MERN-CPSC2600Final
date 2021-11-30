import React, { useState } from "react";
import api from "../api";
import "./TshirtsInsert.css";
import { ThemeContext } from "../context/ThemeContext";

function TshirtsUpdate(props) {
	const { toggle } = React.useContext(ThemeContext);
	const [id] = useState(props.match.params.id);
	const [name, setName] = useState("");
	const [rating, setRating] = useState(0);

	function handleUpdateTshirt() {
		const payload = { name, rating };

		api.updateTshirtById(id, payload).then((res) => {
			window.alert("success!");
			setName("");
			setName(0);
		});
	}

	console.log(id);
	return (
		<div
			className="insertPage"
			style={toggle ? { background: "Darkblue", color: "white" } : {}}
		>
			<h1>Update Tshirt</h1>

			<h2>Name: </h2>
			<input
				type="text"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>

			<h2>Rating: </h2>
			<input
				type="number"
				min="0"
				max="5"
				step="1"
				value={rating}
				onChange={(event) => setRating(event.target.value)}
			/>

			<button onClick={handleUpdateTshirt}>Update Tshirt</button>
		</div>
	);
}
export default TshirtsUpdate;
