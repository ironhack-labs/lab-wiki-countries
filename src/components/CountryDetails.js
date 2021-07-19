import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails (props) {

    const countryID = props.match.params.id

    const currentCountry = countries.find(oneCountry => countryID === oneCountry.cca3);

    // retrive code by accessing parameters of url
    
        return (
            <div>
                <li>
                {currentCountry.capital}
                </li>
                <li>
                {currentCountry.region}
                </li>
            </div>
        )

}

export default CountryDetails;