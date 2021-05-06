import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';

export default function CountryDetails(props) {
    const countryId = props.match.params.cca3;

    const country = countries.find(entry => entry.cca3 === countryId);

    // I map over the country borders of the country I've just found (border is one element of country.borders)
    const borders = country.borders.map(border => {
        // I search the JSON file to find where their cca3 code fits the border element that I'm mapping over already
        let borderCountries = countries.find(country => country.cca3 === border)
        return( 
            <ul>
                <li>
                    <Link to={`/country/${border}`}>{borderCountries.name.common}</Link>
                </li>
            </ul>
        )
    })

    return (
        <>
        <div>
            <h1>{country.name.common}</h1>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Area:</strong> {country.area}km²</p>
            <p><strong>Borders:</strong> {borders}</p>
        </div>
        </>
    )
}

