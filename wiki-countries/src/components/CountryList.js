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


	handleCountryClick = (id) => {
		let countries = this.state.countries;

		let country = countries.filter(country => {
			if(country.ccn3 === id) {
				return country;
			}else {
				return false;
			}
		})

		country = country[0];
		let countrySelected = {
			name: country.name.common,
			capital: country.capital,
			area: country.area,
			borders: country.borders
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
