import React from 'react';
// import CSS
import countries from '../countries.json';

function Country(props) {
    let allCountries = countries.find((country)=> country.name === props.match.params.name);
    return (
        <div>
            <h1>{allCountries.name}</h1>
        </div>
    )
}

export default Country;