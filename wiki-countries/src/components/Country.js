import React, { Component } from 'react';
import { CountryList } from './CountryList';
import { CountryDetail } from './CountryDetail';
import countries from '../countries.json';
import { bordersId, bordersToNames } from './CountryFunctions';

export class Country extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id:'',
			countries,
			country:'',
		};
	}


	handleCountrySelected = (id) => {

		let countries = this.state.countries;
		let country = countries.filter(country => country.ccn3 === id);
		country = country[0];

		let countrySelected = {
			name: country.name.common,
			capital: country.capital,
			area: country.area,
			borders: bordersToNames(country, countries),
			bordersId: bordersId(country, countries)
		}

		this.setState({id, country: countrySelected});
	}

	render = () => {
		const {id, country, countries} = this.state;
		
		return (
			<div className="row">
			<div className="col-sm-6 col-md-4">
				<CountryList countries={countries} onCountrySelected={(id) => this.handleCountrySelected(id)}/>
			</div>
			<div className="col-sm-6 col-md-8">
				<CountryDetail onBorderSelected={(id, countrySelected) => this.handleCountrySelected(id, countrySelected)}  id={id} country={country} countries={countries}/>
			</div>
		</div>
		)
	}
}
