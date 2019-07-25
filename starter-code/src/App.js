import React, { Component } from 'react';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';
import './App.css';
import countries from './countries';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-dark bg-primary mb-3">
					<div className="container">
						<a className="navbar-brand" href="/">
							WikiCountries
						</a>
					</div>
				</nav>
				<div className="container">
					<div className="row">
						<Navbar countries={countries} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/country/:country" component={CountryDetail} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
