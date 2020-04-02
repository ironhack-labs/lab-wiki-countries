import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { Link } from 'react-router-dom';
import CountryDetail from './CountryDetail';
import { Route } from 'react-router-dom';

class App extends Component {
	state = {
		countries: countries
	};

	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg w-100  position-fixed pl-5 bg-primary text-white" style={{zIndex: "99"}}>
					<h1>WikiCountries</h1>
				</nav>
				<div className="row" style={{ paddingTop: '80px', zIndex: "0" }}>
					<div className="col-5" >
						<div className="list-group">
							{this.state.countries.map((country, index) => {
								if (index === 0) {
									return (
										<Link
											to={`/${country.cca3}`}
											className="list-group-item list-group-item-action active"
											key={index}
										>
											{country.flag} {country.name.common}
										</Link>
									);
								}

								if (index === this.state.countries.length - 1) {
									return (
										<Link
											to={`/${country.cca3}`}
											className="list-group-item list-group-item-action disabled"
											key={index}
										>
											{country.flag} {country.name.common}
										</Link>
									);
								}

								return (
									<Link
										to={`/${country.cca3}`}
										className="list-group-item list-group-item-action"
										key={index}
									>
										{country.flag} {country.name.common}
									</Link>
								);
							})}
						</div>
					</div>
					<div className="col-7" >
					  <Route path="/:cca3" component={CountryDetail} />
						
					</div>
				</div>
				
				
			</React.Fragment>
		);
	}
}

export default App;
