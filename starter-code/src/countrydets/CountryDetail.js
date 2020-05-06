import React from 'react'
import { Link } from 'react-router-dom'
import Countries from '../countries.json'

const CountryDetail = (props) => {
	const foundCountry = Countries.find((elm) => props.match.params.cca3 === elm.cca3)

	return (
		<div className='col-8'>
			<h1>{foundCountry.name.common}</h1>
			<table className='table'>
				<thead></thead>
				<tbody>
					<tr>
						<td style={{ width: '30%' }}>Capital</td>
						<td>{foundCountry.capital}</td>
					</tr>
					<tr>
						<td>Area</td>
						<td>
							{foundCountry.area} km
							<sup>2</sup>
						</td>
					</tr>
					<tr>
						<td>Borders</td>
						<td>
							<ul className='list-group'>
								{foundCountry.borders.map((border, idx) => (
									<Link key={idx} to={border}>
										{Countries.find((country) => country.cca3 === border).name.common}
									</Link>
								))}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default CountryDetail
