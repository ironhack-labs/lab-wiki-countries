import React from "react";
import { CountryList } from './components/CountryList';
import { CountryDetail } from './components/CountryDetail';
import './app.css';


export class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			id:'',
			country: ''
		}
	}


	handleCountrySelected = (id, countrySelected) => {
		this.setState({id, country: countrySelected});
	}

	handleBorderSelected = (id, countrySelected) => {
		this.setState({id, country: countrySelected});
	}

	render() {
		let {id, country} = this.state;
		return (
			<section className="container">
				<div className="row">
					<header className="header">
						<h5 className="title">WikiCountries</h5>
					</header>
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<CountryList onCountrySelected={(id, countrySelected) => this.handleCountrySelected(id, countrySelected)}/>
					</div>
					<div className="col-sm-6 col-md-8">
						<CountryDetail onBorderSelected={(id, country) => this.handleBorderSelected(id, country)} id={id} country={country}/>
					</div>
				</div>
			</section>
		)
	}
}

//