import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function CountryContainer(props) {
	const country = props.countries.filter(c => c.cca3 === props.match.params.id)[0];
	if (!country) return "";

	const borders = country.borders.map(b => {
		return props.countries.find(c => c.cca3 === b);
	});

	return (
		<div className="col-7">
			<h1>{country.name.common}</h1>
			<table className="table">
				<thead />
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
							<ul>
								{borders.map((border, i) => (
									<li key={i}>
										<Link to={`/${border.cca3}`}>{border.name.common}</Link>
									</li>
								))}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
