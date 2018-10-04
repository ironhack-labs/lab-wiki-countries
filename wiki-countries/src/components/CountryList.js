import React, { Component } from "react";
import { CountryItem } from '../components/CountryItem';
import countries from '../countries.json';
import "./countrylist.css";


export class CountryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries,
			id:''
		};
	}
	handleCountryClick = (id) => {
		this.setState({id: id})
	}
 
	_renderCountries = (el) => {
		return <CountryItem key={el.ccn3} name={el.name.common} flag={el.flag} id={el.ccn3} onCountryClick={id => this.handleCountryClick(id)}/>
	}

	render() {
		return (
			<div className="country-list">
				<ul>
					{this.state.countries.map(this._renderCountries)}
				</ul>
			</div>
		);
	}
}
