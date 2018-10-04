import React, {Component} from 'react';
import './countryDetail.css';


export class CountryDetail extends Component {
	



	render() {
		let {country} = this.props;


		return (
			<div className="country-detail">
				<h2>{country.name}</h2>
				<div>{country.capital}</div>
				<div>{country.area &&  country.area !=='' ? `${country.area} Km`:''} </div>
				
			</div>
		)
	}
}