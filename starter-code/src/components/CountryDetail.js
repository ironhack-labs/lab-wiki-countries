import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

const CountryDetail = props => {
	const country = countries.filter(elm => elm.cca3 === props.match.params.id)
	return (
		<div>
			<h2>{country[0].name.official}</h2>
			<hr />
			<p>Capital: {country[0].capital}</p>
			<hr />
			<p>Area: {country[0].area}km**2</p>
			<hr />
			<p>Borders:</p>
			<ul>
				{country[0].borders.map((elm, idx) => {
					const country2 = countries.filter(elm2 => elm === elm2.cca3)

					return (
						<li>
							<Link to={elm} key={idx}>
								{country2[0].name.official}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default CountryDetail
