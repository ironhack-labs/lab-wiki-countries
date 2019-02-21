import React, { Component } from 'react';
import AllCountries from './components/AllCountries';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-primary mb-3">
					<div className="container">
						<a className="navbar-brand" href="/">
							WikiCountries
						</a>
					</div>
				</nav>
				<div className="container list-more-select">
					<div className="row">
						<div className="col-5">
							<AllCountries />
						</div>
						<div className="col-7">
							<Switch>
								<Route exact path="/:cca3" component={CountryDetail} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

