import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json';



const CountryDetails = (props) => {
	const countryCode = props.match.params.id;
	console.log("country code", countryCode);

	const SelectedCountry = countries.find((country) => {
		// console.log(country);
		return country.cca3 === countryCode;
	});
  

	return (
		<>
			<div className="col-7">
				<h1>{SelectedCountry.name.common}</h1>
				<table className="table">
					<thead></thead>
					<tbody>
						<tr>
							<td style={{width: "30%"}}>Capital</td>
							<td>Paris</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>551695 km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>
								{SelectedCountry.borders.map(borderCountry => (
										<li><Link to={`${borderCountry}`}>
											{
                        countries.find((country) => country.cca3 === borderCountry)
                        .name.common
                      }
										</Link></li>
								))}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default CountryDetails;