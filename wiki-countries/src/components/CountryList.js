import React, { Component } from "react";
import { CountryItem } from '../components/CountryItem';
import countries from '../countries.json';
import "./countrylist.css";


export class CountryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries,
			country:'',
		};
	}

	bordersToNames = (country) => {
		
		let borders = country.borders;
		let countriesFiltered = [];

		countries.forEach((country) => {
			if (borders.includes(country.cca3)) {
				countriesFiltered.push(country);
			} 
		})

		let countriesName = countriesFiltered.map(country =>  country.name.common);

		return countriesName;
	}

	handleCountryClick = (id) => {

		let countries = this.state.countries;
		let country = countries.filter(country => country.ccn3 === id);
		country = country[0];

		let countrySelected = {
			name: country.name.common,
			capital: country.capital,
			area: country.area,
			borders: this.bordersToNames(country)
		}

		this.props.onCountrySelected(id, countrySelected);
	}
 
	renderCountries = (el) => {
		return <CountryItem 
			key={el.ccn3} 
			name={el.name.common} 
			flag={el.flag} 
			id={el.ccn3} 
			onCountryClick={id => this.handleCountryClick(id)}/>
	}

	render() {
		return (
			<div className="country-list">
				<ul>
					{this.state.countries.map(this.renderCountries)}
				</ul>
			</div>
		);
	}
}
