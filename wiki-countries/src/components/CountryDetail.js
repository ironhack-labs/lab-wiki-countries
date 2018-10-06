import React, {Component} from 'react';
import './countryDetail.css';


export class CountryDetail extends Component {
	//{country.borders.map((border,i) => <li key={i}><a href={id}>{border}</a></li>)}: ''}
	
	renderCountryBorders = (country, id) => {
		let bordersToHtml = country.borders.map((border,i) => {
			return (<li key={i}><a href={id}>{border}</a></li>)
		})
		return (<div><strong>Borders:</strong><ul>{bordersToHtml}</ul></div>)
	}

	renderCountry = (countryProp, country, id) => {
		switch (countryProp) {
			case "name":
				return (<div><h2>{country.name}</h2></div>)
			case "capital":
				return (<div><strong>Capital:</strong><span>{country.capital}</span></div>)
			case "area":
				return	(<div><strong>Area:</strong><span>{`${country.area} Km`}<sup>2</sup></span></div>)
			case "borders":
				return (this.renderCountryBorders(country, id));
			default:
				break;
		}
  	};


	render() {
		let {id, country} = this.props;

		return (
			<div className="country-detail">
				{Object.keys(country).map((countryProp) => this.renderCountry(countryProp, country, id))}
			</div>
		)
	}
}

// {country.name && country.name !=='' ? <div><h2>{country.name}</h2></div> : false}
// {country.capital && country.capital !=='' ? <div><strong>Capital:</strong><span>{country.capital}</span></div> : false}
// {country.area && country.area !=='' ? <div><strong>Area:</strong><span>{`${country.area} Km`}</span></div> : false}
// {country.borders && country.borders.length !== 0 ? 
//<div><strong>Borders:</strong><ul>{country.borders.map((border,i) => <li key={i}><a href={id}>{border}</a></li>)}</ul></div> : ''}