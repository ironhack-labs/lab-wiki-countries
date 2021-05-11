import React from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../../countries.json';

const CountryDetails = (props) => {

    const countryId = props.match.params.id;
    const country = countriesData.find(country => country.cca3 === countryId)
    const countryBordersList = country.borders.map(border => {
        const countryBorder = countriesData.find(country => country.cca3 === border)
        return <li key={countryBorder.cca3}><Link to={`/$countryBorder.cca3`}>{countryBorder.name.common}</Link></li>
    })

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <p>Borders:</p>
                <ul>
                    {countryBordersList}
                </ul>
            </div>
        </div>
    )
}

export default CountryDetails;