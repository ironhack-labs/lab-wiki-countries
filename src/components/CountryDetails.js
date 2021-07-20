import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails (props) {

    //accessing to the code country

    const countryID = props.match.params.id

    const currentCountry = countries.find(oneCountry => countryID === oneCountry.cca3);

    // retrive code by accessing parameters of url
    
        return (
            <div className="caja-details">
                <ul>
                    <li>
                        {currentCountry.capital}
                    </li>
                    <li>
                        {currentCountry.region}
                    </li>
                    <li>
                        {currentCountry.subregion}
                    </li>
                    <li>
                        {currentCountry.area}
                    </li>
                    <li>
                        {currentCountry.flag}
                    </li>
                    <li>
                        {currentCountry.latlng}
                    </li>
                    <li>
                        {currentCountry.currency}
                    </li>
                </ul>
            </div>
        )

}

export default CountryDetails;