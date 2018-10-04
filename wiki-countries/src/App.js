import React from "react";
import { Switch, Route } from 'react-router-dom';
import { CountryList } from './components/CountryList';
import { CountryDetail } from './components/CountryDetail';
import './app.css';


export class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {}
	}

	render() {
		return (
			<section className="container">
				<div className="row">
					<header className="header">
						<h5 className="title">WikiCountries</h5>
					</header>
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<CountryList/>
					</div>
					<div className="col-sm-6 col-md-8">
						<CountryDetail/>
					</div>
				</div>
			</section>
		)
	}
}