import React from 'react';
import JSONcountries from './../countries.json';

const CountryDetails = (props) => {

    const countryID = props.match.params.cca3name;

    const foundCountry = JSONcountries.find((country) => country.cca3 === countryID);
    console.log(foundCountry);
    return (
        <div>
            <h1>This country is {foundCountry.name.common} poupou</h1>
            
        </div>
    )
}

export default CountryDetails;
    // const countryID = props.match.params.cca3;

    // const countries = JSONcountries.find((country) => country.cca3);