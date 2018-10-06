import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import './css/countryDetail.css';


export class CountryDetail extends Component {

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

	handleBorderClick = (e, id) => {
		let countries = this.state.countries;
		let country = countries.filter(country => country.ccn3 === id);
		country = country[0];

		console.log('COUNTRY', country);
		let countrySelected = {
			name: country.name.common,
			capital: country.capital,
			area: country.area,
			borders: this.bordersToNames(country),
			bordersId: this.bordersId(country)
		}

		this.props.onBorderSelected(id, countrySelected);
	} 
	
	renderCountryBorders = (country) => {
		let bordersId = country.bordersId;

		if(country.borders.length > 0){
			let bordersToHtml = country.borders.map((border,i) => {
				return (<li onClick={(e) => {this.handleBorderClick(e, bordersId[i])}} key={i}>
							<Link to={bordersId[i]}>{border}</Link>
						</li>)
			})
			return (<div><strong>Borders:</strong><ul>{bordersToHtml}</ul></div>)
		}	
	}

	renderCountry = (countryProp, country, i) => {
		
		switch (countryProp) {
			case "name":
				return (<div key={i}><h2>{country.name}</h2></div>)
			case "capital":
				return (<div key={i}><strong>Capital:</strong><span>{country.capital}</span></div>)
			case "area":
				return	(<div key={i}><strong>Area:</strong><span>{`${country.area} Km`}<sup>2</sup></span></div>)
			case "borders":
				return (<div key={i}>{this.renderCountryBorders(country)}</div>);
			default:
				break;
		}
  	};


	render() {
		let {country} = this.props;

		return (
			<div className="country-detail">
				{Object.keys(country).map((countryProp, i) => this.renderCountry(countryProp, country, i))}
			</div>
		)
	}
}
