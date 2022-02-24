
//CountryDetails.js

import countries from '../countries.json';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function CountryDetails(props) {
    const  countryId  = useParams(); //to get alpha3Code
    
    const foundCountry = props.countries.find((selectedCountry) => {
        return selectedCountry.alpha3Code === countryId.id;
    })

    const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`

    return (
        <div className="CountryDetails">
            <img src={flagUrl} alt="country_flag"/>
            <h1>{foundCountry.name.common} Details</h1>
            <p>Capital: {foundCountry.capital}</p>            
            <p>Area: {foundCountry.area}km²</p>
            <p>Borders: </p>
            {foundCountry.borders.map(borderCountry => {
                return (
                    <p>{borderCountry}</p>
                );
            })}
        </div>
    );
}

export default CountryDetails;