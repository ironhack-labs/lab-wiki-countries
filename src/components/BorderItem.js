import React from 'react'
import { Link } from 'react-router-dom'
import jsonCountries from '../countries.json';

const BorderItem = (props) => {

    const filteredCountry = jsonCountries.find(eachCountry => eachCountry.cca3 === props.border)

    return (
        <Link to={`/country-details/${filteredCountry.cca3}`} key={filteredCountry.cca3} >
            <div>
                <li >{filteredCountry.name.common}</li>
            </div>
        </ Link>
    );
}

export default BorderItem;