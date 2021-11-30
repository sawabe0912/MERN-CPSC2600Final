import React, { useState } from "react";
import api from "../api";
import "./TshirtsInsert.css";
import { ThemeContext } from "../context/ThemeContext";

function WebsitesInsert(props) {
	const { toggle } = React.useContext(ThemeContext);
	const [comment, setComment] = useState("");

	function handleIncludeWebsite() {
		const payload = { comment };

		api.insertWebsite(payload).then((res) => {
			window.alert("your review posted successfully");
			setComment("");
		});
	}

	console.log(comment);
	return (
		<div
			className="insertPage"
			style={toggle ? { background: "Darkblue", color: "white" } : {}}
		>
			<h1>Review for this website</h1>
			<h2>Comment: </h2>
			<input
				type="text"
				value={comment}
				onChange={(event) => setComment(event.target.value)}
			/>

			<button onClick={handleIncludeWebsite}>Post</button>
		</div>
	);
}

export default WebsitesInsert;
