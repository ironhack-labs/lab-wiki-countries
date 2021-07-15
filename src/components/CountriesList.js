import React from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountriesList() {
	return (
		<div className="countries-list">
			<ul style={{ listStyle: 'none' }}>
            {countries.map(country => (
                        <li key={country.cca3}>
							{country.flag} <Link to={'/countries/' + country.cca3}>{country.name.common}</Link>
						</li>
                        ))}
			</ul>
		</div>
	)
}