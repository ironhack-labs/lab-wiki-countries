import React from "react";

import "./App.css";
import countries from "./countries.json"
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetail";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="container row">
				<CountryList countries = {countries}/>
        <Switch>
				<Route exact path="/:country" component={CountryDetails} />


        </Switch>
			</div>
		</div>
	);
}

export default App;
