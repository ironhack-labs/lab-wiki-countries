import React from 'react';
import {Link} from 'react-router-dom';

export default function CountryDetails(props) {
	const getCountryDetails = countryCode => {
		return props.countries.find(country => {
			return country.cca3 === countryCode;
		});
	};
	const country = getCountryDetails(props.match.params.countryCode);
	const {name: {common: countryName}, capital, area} = country;

	let borderList = '';

	if (country.borders.length > 0) {
		borderList = country.borders.map(countryCode => {
			const country = getCountryDetails(countryCode);
			return (
				<li key={countryCode}>
					<Link
						to={`/${countryCode}`}>{country.name.common}</Link>
				</li>
			);
		});
	} else {
		borderList = <p>This country has no borders</p>;
	}

	return (
		<div className="col-5">
			<h1>{countryName}</h1>
			<table className="table">
				<thead></thead>
				<tbody>
				<tr>
					<td style={{width: '30%'}}>Capital</td>
					<td>{capital}</td>
				</tr>
				<tr>
					<td>Area</td>
					<td>{area}
						<sup>2</sup>
					</td>
				</tr>
				<tr>
					<td>Borders</td>
					<td>
						<ul>
							{borderList}
						</ul>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
}