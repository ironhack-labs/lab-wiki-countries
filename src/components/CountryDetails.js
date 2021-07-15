import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountriesList(props) {
    const countryId = props.match.params.id;
	const country = countries.find(country => country.cca3 === countryId);
    console.log('countryId, country = ', countryId, country)

    console.log('borders = ', country.borders)
    const borders = country.borders.map(border => (
        <p key={border} style={{ margin: '-4px' }}><Link to={'/countries/' + border}>{countries.find(country => country.cca3 === border).name.common}</Link></p>
        ))

 	return (
		<div>
			<h2>{country.flag} {country.name.common}</h2>
			<p style={{ marginTop: '20px' }}><span>Capital:</span> {country.capital}</p>
            <p><span>Region:</span> {country.region} / {country.subregion}</p>
            <div><span>Borders:</span>{borders}</div>
			<p style={{ marginTop: '20px' }}><Link to="/countries">Back to countries</Link></p>
		</div>
	)
}