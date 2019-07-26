import React, { Component } from 'react';
import countries from './../../countries';

export default class CountryDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [...countries],
			currentCountry: {
				name: {
					common: '',
				},
				capital: '',
				borders: '',
			},
		};
	}

	componentDidMount() {
		this.getCountryInfo(this.props.match.params.country);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.match.params.country !== nextProps.match.params.country) {
			this.getCountryInfo(nextProps.match.params.country);
		}
		return true;
	}
	getCountryInfo(countryName) {
		const countryInfo = this.state.countries.filter((country, i) => {
			return country.cca3 === countryName;
		})[0];
		this.setState({ currentCountry: countryInfo });
	}

	render() {
		return (
			<div className="col-7">
				<h1>{this.state.currentCountry.name.common}</h1>
				<table className="table">
					<thead></thead>
					<tbody>
						<tr>
							<td style={{ width: '30%' }}>Capital</td>
							<td>{this.state.currentCountry.capital[0]}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{this.state.currentCountry.area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								{/* <ul>{this.countryBorder(this.state.currentCountry.borders)}</ul> */}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
