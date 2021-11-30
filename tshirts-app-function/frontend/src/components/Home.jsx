import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Home.css";

export default function Home() {
	const { toggle } = React.useContext(ThemeContext);
	return (
		<div
			style={toggle ? { background: "Darkblue", color: "white" } : {}}
			className="Home">
			<h2>Welcome to my CPSC2600 Final Project Website.</h2>
			<p>
				This website contains Tshirts review pages, list of Tshirts reviews, and
				also the page adding comment for this website.
			</p>
		</div>
	);
}
