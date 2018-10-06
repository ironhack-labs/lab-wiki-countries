import React, { Component } from "react";
import { CountryListItem } from './CountryListItem';
import countries from '../countries.json';
import "./css/countrylist.css";


export class CountryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries,
			country:'',
		};
	}

	filterCountries = (country) => {
		let borders = country.borders;
		let countriesFiltered = countries.filter((country) => {
			if (borders.includes(country.cca3)) {
				return country;
			}
			return false;
		})
		return countriesFiltered;
	}


	bordersId = (country) => {
		let countriesFiltered = this.filterCountries(country);
		let countriesId = countriesFiltered.map(country =>  country.ccn3);
		return countriesId;
	}

	bordersToNames = (country) => {
		let countriesFiltered = this.filterCountries(country);
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
			borders: this.bordersToNames(country),
			bordersId: this.bordersId(country)
		}

		this.props.onCountrySelected(id, countrySelected);
	}
 
	renderCountries = (el) => {
		return <CountryListItem 
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
