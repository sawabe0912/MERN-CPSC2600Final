import React from "react";
import { Link } from "react-router-dom";
import "./Links.css";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

function Links() {
	const { toggleFunction } = React.useContext(ThemeContext);
	return (
		<div
			style={{
				backgroundColor: "DarkGrey",
				height: "100px",
				paddingBottom: 30
			}}>
			<motion.div
				animate={{
					backgroundColor: ["hsl(0, 120, 50)", "hsl(-100, 10, 50)"]
				}}>
				<Link to="/" className="finalProject">
					Project
				</Link>
				<button onClick={toggleFunction} className="toggleBtn">
					Change Theme
				</button>
			</motion.div>

			<motion.div
				animate={{
					x: "13%",
					transition: { duration: 3 }
				}}>
				<Link to="/tshirts/list" className="linkEl">
					List of Tshirts
				</Link>
			</motion.div>
			<motion.div
				animate={{
					x: "30%",
					transition: { duration: 3 }
				}}>
				<Link to="/tshirts/create" className="linkEl">
					Review Tshirt
				</Link>
			</motion.div>
			<motion.div
				animate={{
					x: "40%",
					transition: { duration: 3 }
				}}>
				<Link to="/websites/create" className="linkEl">
					Comment this app
				</Link>
			</motion.div>
			<motion.div
				animate={{
					x: "70%",
					transition: { duration: 3 }
				}}>
				<Link to="/criteria" className="linkEl">
					Criteria
				</Link>
			</motion.div>
		</div>
	);
}

export default Links;
