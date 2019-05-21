import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import countries from './countries.json';
import { Route } from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			countries: countries
		};
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Sidebar countries={this.state.countries} />

				{this.state.countries.map((country, index) => {
					let countryCCA3 = country.cca3;
					console.log(countryCCA3);
					return (
						<Route key={index} path="/:countryCCA3" render={() => <CountryDetail country={country} />} />
					);
				})}
			</div>
		);
	}
}

export default App;
