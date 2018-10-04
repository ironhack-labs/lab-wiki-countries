import React, {Component} from 'react';
import './countryDetail.css';


export class CountryDetail extends Component {
	



	render() {
		let {id, country} = this.props;
		
		return (
			<div className="country-detail">
				<h2 >Hola {id}</h2>
				<div>{country.capital[0]}</div>
			</div>
		)
	}
}