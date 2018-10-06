import React, { Component } from "react";
import { CountryListItem } from './CountryListItem';
import "./css/countrylist.css";


export class CountryList extends Component {
	
	
	handleCountryClick = (id) => {
		this.props.onCountrySelected(id);
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
		const {countries} = this.props;

		return (
			<div className="country-list">
				<ul>
					{countries.map(this.renderCountries)}
				</ul>
			</div>
		);
	}
}
