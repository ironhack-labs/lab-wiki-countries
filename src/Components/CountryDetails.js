import React from 'react';
import { Link } from 'react-router-dom'

export const CountryDetails = (props) => {
    const { id } = props.match.params;

    const findCountryByCode = (code) => {
        return props.countries.find(country => country.cca3 === code)
    }

    const oneCountry = findCountryByCode(id);

    return (
        <div>
            <h1>{oneCountry.name.common}</h1>
            <hr />
Capital: {oneCountry.capital}
            <hr />
Area: {oneCountry.area} km²
            <hr />
Borders:
            <ul>
                {oneCountry.borders.map(border => {
                    const borderCountry = findCountryByCode(border)
                    return (
                    <li>
                        <Link to={`/countries/${border}`}>{borderCountry.name.common}</Link>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}