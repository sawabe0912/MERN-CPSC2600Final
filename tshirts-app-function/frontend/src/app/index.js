import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from "../Link/Links";
import WebsitesInsert from "../components/WebsitesInsert";
import "./index.css";
import TshirtsInsert from "../components/TshirtsInsert";
import TshirtsUpdate from "../components/TshirtsUpdate";
import TshirtsList from "../components/TshirtsList";
import Criteria from "../components/Criteria";
import Home from "../components/Home";
function App() {
	return (
		<Router>
			<Links />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/criteria" exact component={Criteria} />
				<Route path="/tshirts/list" exact component={TshirtsList} />
				<Route path="/tshirts/create" exact component={TshirtsInsert} />
				<Route path="/tshirts/update/:id" exact component={TshirtsUpdate} />
				<Route path="/websites/create" exact component={WebsitesInsert} />
			</Switch>
		</Router>
	);
}

export default App;
