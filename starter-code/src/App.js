import React, { Component } from "react";
import "./App.css";
import CountryItem from "./components/CountryItem";
import { Route } from "react-router-dom";
import CountryContainer from "./components/CountryContainer";

class App extends Component {
	url = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";
	state = {
		countries: []
	};

	componentDidMount() {
		fetch(this.url)
			.then(res => res.json())
			.then(countries => {
				this.setState({ countries });
			})
			.catch(err => {
				throw err;
			});
	}

	render() {
		const { countries } = this.state;
		return (
			<div id="root">
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
							<div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
								<div className="list-group">
									{countries.map((country, i) => (
										<CountryItem key={i} country={country} />
									))}
								</div>
							</div>
							{/* <Route exact path="/:id" component={CountryContainer} /> */}
							<Route exact path="/:id" render={routeProps => <CountryContainer {...routeProps} countries={this.state.countries}/>} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
