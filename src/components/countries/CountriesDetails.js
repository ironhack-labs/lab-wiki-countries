import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetails(props) {

    const oneCountry = countries.find((elm) => elm.cca3 === props.match.params.cca3)

    return (
        <div>
            <h2>Country Name: {oneCountry.name.official}</h2>
            <h2>Capital: {oneCountry.capital}</h2>
            <h2>Area: {oneCountry.area}</h2>
        </div>
    )
}

export default CountryDetails; 