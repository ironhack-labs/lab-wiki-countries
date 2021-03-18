import React from 'react'
import countries from './../countries.json';

const CountryDetails = (props) => {

    const countryId = props.match.params.id;

    const foundCountry = countries.find((country) => country.cca3 === countryId);

    return (
        <div>
            <h1>{foundCountry.name.official}</h1>
            <p>Region: {foundCountry.region}</p>

        </div>
    )
}

export default CountryDetails;
