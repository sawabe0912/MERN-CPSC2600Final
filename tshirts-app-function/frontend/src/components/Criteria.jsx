import React from "react";
import "./Criteria.css";
import { ThemeContext } from "../context/ThemeContext";

function Criteria() {
	const { toggle } = React.useContext(ThemeContext);
	return (
		<div
			className="criteria"
			style={toggle ? { background: "Darkblue", color: "white" } : {}}>
			<h1>Option2</h1>
			<h3>App Componentization, Organization/Architecture</h3>
			<p>
				I created Tshirts Insert, Tshirts Update, Tshirts List, Websites Insert
				components. Tshirts Insert component enables users to input the name of
				T-shirt and its rating. Tshirts List component works in order to show
				what T-shirts data is stored in mongoDB, and also user can delete it and
				help to update it. Tshirt update component enables retrieve the tshirts
				data based on the id, and helps to update the t-shirt name or rating.
				Also, in web insert component, users can post my project review.
			</p>

			<h3>Adding, Removing, Editing, and Filtering features </h3>
			<p>
				As I mentioned, in T-shirts insert and web insert components, users can
				add the tshirts name and rating, and comment individually. These
				components corresponds to mongoDB, that is why, it is possible to add
				those data to mongoDB. In tshirts list component, users can delete the
				tshirts data. In Tshirts update component, users can edit the tshirts
				name or rating.
			</p>

			<h3>Client-side routing</h3>
			<p>
				I added home page, Tshirts list page, Tshirts insert page, Website
				review page, and this documentation about project criteria using
				Client-side routing.
			</p>

			<h3>REST API using Express</h3>
			<p>
				I implemented 2 GET routes for T-shirts section in order to get the
				t-shirts collection and individual one. Also, I implemented 2 POST
				routes in order that users post the tshirts review and comments for this
				website. Also, I implemented DELETE and PU routes as well for t-shirts
				section.
			</p>
			<h3>Used MongoDB to persist some data</h3>
			<p>
				I used axio to connect with mongoDB. I implemented 2 collections, which
				are T-shirts and Website. This website correctly connect with mongoDB
				with sanitization and validatization.
			</p>

			<h3>Deployed full stack app to Heroku</h3>
			<p>I use Heroku to display this website.</p>

			<h3>Well designed, tested and free from errors</h3>
			<p>
				I checked if each functionality correctly works or not. They
				successfully work. I do not have any errors.
			</p>

			<h3>
				Application is original and demonstrates creative use of tools learned
				throughout the course
			</h3>
			<p>
				This website is original, and I used functionalities that I learned in
				this class. Except the functionalities that I mentioned above, I used
				both functional components and class. This helps me to understand the
				each good points and diference and occasion when I should use, although
				they are similar.
			</p>

			<h3>2 Bonus Points</h3>
			<p>
				I implemented Framer motion into Navigation section and add button in
				T-shirts insert page. In addition, I implemented toggle uisng
				contextAPI.
			</p>
		</div>
	);
}

export default Criteria;
