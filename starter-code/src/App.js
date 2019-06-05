import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Countries from './components/Countries';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { detail: true };
	}

	updateCountry = (detail) => {
		this.setState({ detail: !this.state.detail });
	};
	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="container">
					<div className="row">
						<div className="col-5">
							<Countries update={this.updateCountry} />
						</div>
						<div className="col-7">
							<Switch>
								<Route
									path="/:id"
									render={({ match }) => {
										return this.state.detail ? (
											<CountryDetail update={this.updateCountry} match={match} />
										) : null;
									}}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
