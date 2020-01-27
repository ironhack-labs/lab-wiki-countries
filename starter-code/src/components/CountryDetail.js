import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const CountryDetails = props => {
	const country = [...countries].filter(
		e => e.ccn3 === props.match.params.country
	)[0];

	// const countryBorders = [...countries]
	// 	.filter(e => country.borders.includes(e.ccn3)))
	// 	.map((border, i) => (
	//     console.log(border)

	//     // <li key={i}>
	// 		// 	<Link to={`/${border}`}>{border.name.common}</Link>
	// 		// </li>
	//   ));

	const countryBorders = [...countries]
		.filter(e => country.borders.includes(e.cca3))
		.map((border, i) => (
			<li key={i}>
				<Link to={`/${border.ccn3}`}>{border.name.common}</Link>
			</li>
		));

	return (
		<div className="col-7">
			<h1>{country.name.common}</h1>
			<table className="table">
				<thead></thead>
				<tbody>
					<tr>
						<td style={{ width: "30%" }}>Capital</td>
						<td>{country.capital}</td>
					</tr>
					<tr>
						<td>Area</td>
						<td>
							{country.area} km
							<sup>2</sup>
						</td>
					</tr>
					<tr>
						<td>Borders</td>
						<td>
							<ul>{countryBorders}</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CountryDetails;
