import React from 'react';
import countries from './../../countries';
import { Link, NavLink } from 'react-router-dom';

export default function CountryDetail(props) {
	const countryNameByShortName = (shortName) => {
		const countryName = countries.filter((country, i) => {
			return country.cca3 === shortName;
		})[0];
		return countryName.name.common;
	};
	const countryBorders = (borderList) => {
		return borderList.map((country, i) => {
			return (
				<li index={`${country}-${i}`}>
					<NavLink exact to={`/country/${country}`} index={`${i}-${country}`}>
						{countryNameByShortName(country)}
					</NavLink>
				</li>
			);
		});
	};
	const findCountry = (countryName) => {
		const countryInfo = countries.filter((country, i) => {
			return country.cca3 === countryName;
		})[0];
		return (
			<div>
				<h1>{countryInfo.name.common}</h1>
				<table className="table">
					<thead></thead>
					<tbody>
						<tr>
							<td style={{ width: '30%' }}>Capital</td>
							<td>{countryInfo.capital[0]}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{countryInfo.area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>{countryBorders(countryInfo.borders)}</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	};

	return <div className="col-7">{findCountry(props.match.params.country)}</div>;
}
