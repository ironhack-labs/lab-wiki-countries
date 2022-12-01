import React from 'react';
import {Link, useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CountryDetails = (props) => {
    const [country, setCountry] = useState("");
    const {countryId} = useParams();

    const currentCountryFound = props.countriesList.find((singleCountry) => {
        return singleCountry.alpha3Code === countryId;
    });
    currentCountryFound && console.log(currentCountryFound);
    return (
        <div>
            <h1>{currentCountryFound.name.common}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountryFound.alpha2Code.toLowerCase()}.png`} 
            alt="flag" height="50" width="75"/>
            <p><b>Capital:</b> {currentCountryFound.capital}</p>
            <p><b>Area:</b> {currentCountryFound.area} km<sup>2</sup></p>
            
            <p><b>Borders:</b>{currentCountryFound.borders.map((borderCountry) => {
                return (
                    <div>
                        <p key={currentCountryFound.alpha3Code}>
                            <NavLink to={`/${borderCountry}`}>{borderCountry}</NavLink>
                        </p>
                    </div>
                )
            })}</p>
        </div>
    );
};

export default CountryDetails;