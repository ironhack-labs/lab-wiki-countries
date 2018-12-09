import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			isLoaded: false,
			selectedCountry: null
		};
	}

	selectCountry(country) {
		this.setState({ selectedCountry: country });
	}

	componentDidMount() {
		fetch('http://206.189.7.127/countries')
			.then((res) => res.json())
			.then((result) => this.setState({ countries: result, isLoaded: true }));
	}
	handleSearch = (e) => {
		fetch(`http://206.189.7.127/countries/${e.target.value}`)
			.then((res) => res.json())
			.then((result) => this.setState({ countries: result }));
	};
	render() {
		let countries;
		if (this.state.isLoaded) {
			countries = this.state.countries.map((country, i) => (
				<li
					key={i}
					className="list-group-item list-group-item-action text-left"
					onClick={() => this.selectCountry(country)}
				>
					{country.flag} {country.name.common}
				</li>
			));
		} else {
			countries = <h1>Loading..</h1>;
		}

		let selectedCountry = '';

		if (this.state.selectedCountry) {
			selectedCountry = (
				<div className="list-group list-group-item-action border border-primary p-4 text-left">
					<h2 className="border-bottom mb-3 ">
						<strong>{this.state.selectedCountry.name.common}</strong>
					</h2>
					<h5 className="border-bottom pb-3 pt-3">Capital: {this.state.selectedCountry.capital}</h5>
					<h5 className="border-bottom pb-3 pt-3">
						Area: {this.state.selectedCountry.area} km<sup>2</sup>
					</h5>
					<h5>Borders: </h5>
					<p className="text-left">
						{this.state.selectedCountry.borders.map((border, i) => <div>{border}</div>)}
					</p>
				</div>
			);
		} else {
			selectedCountry = 'There is no detail information';
		}

		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-primary mb-3">
					<div className="container">
						<a className="navbar-brand" href="/">
							WikiCountries
						</a>
					</div>
				</nav>

				<div className="row">
					<div className="col-5">
						<div>
							<input type="text" name="search" placeholder="search" onChange={this.handleSearch} />
							<h1>Countries: </h1>
							<ul>{countries}</ul>
						</div>
					</div>
					<div className="col-7">{selectedCountry}</div>
				</div>
			</div>
		);
	}
}

export default App;
