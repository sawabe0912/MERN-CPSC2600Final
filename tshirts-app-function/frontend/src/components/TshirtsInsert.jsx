import React, { useState } from "react";
import api from "../api";
import "./TshirtsInsert.css";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

function TshirtsInsert(props) {
	const { toggle } = React.useContext(ThemeContext);
	const [name, setName] = useState("");
	const [rating, setRating] = useState(0);
	function handleIncludeTshirt() {
		const payload = { name, rating };

		api.insertTshirt(payload).then((res) => {
			window.alert("Tshirt posted successfully");
			setName("");
			setRating(0);
		});
	}

	console.log(name);
	return (
		<div
			className="insertPage"
			style={toggle ? { background: "Darkblue", color: "white" } : {}}
		>
			<h1>Review Tshirt</h1>
			<h2>Name: </h2>
			<input
				type="text"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<h2>Rating: </h2>
			<input
				type="number"
				step="1"
				min="0"
				max="5"
				value={rating}
				onChange={(event) => setRating(event.target.value)}
			/>
			<motion.button
				whileHover={{ scale: 1.5 }}
				onClick={handleIncludeTshirt}
			>
				Post review
			</motion.button>
		</div>
	);
}

export default TshirtsInsert;
