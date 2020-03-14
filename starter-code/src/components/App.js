import React from 'react';
import '../App.css';
import { CountryDetail } from './CountryDetail';
import { List } from './List';
import Countries from '../countries.json';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-primary">
				<span className="navbar-brand mb-0 h1">WikiCountries</span>
			</nav>
			<div className="row">
				<List countries={Countries} />
				<Switch>
					<Route path="/" exact />
					{Countries.map((country, i) => {
						return (
							<Route
								key={i}
								path={`/${country.cca3}`}
								component={() => (
									<div className="col-7">
										<CountryDetail country={country} />
									</div>
								)}
							/>
						);
					})}
				</Switch>
			</div>
		</div>
	);
};
