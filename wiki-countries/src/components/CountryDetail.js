import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/countryDetail.css';


export class CountryDetail extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			id:'',
			country: ''
		}
	}

	handleClick = (e) => {
		//this.props.onBorderClick(this.props.id)
	}


	renderCountryBorders = (country) => {
		let bordersId = country.bordersId;

		if(country.borders.length > 0){
			let bordersToHtml = country.borders.map((border,i) => {
				return (<li onClick={(e) => {this.handleClick(e, bordersId[i])}} key={i}>
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
