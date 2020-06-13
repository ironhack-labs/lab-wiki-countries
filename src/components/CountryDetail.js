import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './../countries.json';
import { Link } from 'react-router-dom'
//import CountriesList from './CountriesList'

const CountryDetail = (props) => {

    let countryIndex = countries.findIndex(e => e.cca3 === props.match.params.cca3)

    let country = countries[countryIndex]

/*     if (countryIndex < countries.length) {
        countryIndex = -1
    } */

    let nextCountry = countries[countryIndex + 1]
    let previousCountry = countries[countryIndex - 1]


    return (
        <div className="container">
            <p>{country.name.common}</p>
            <p>{country.tld}</p>
            <p><Link to="/">Go back to overview</Link></p>
            <p><Link to={"/country-detail/" + previousCountry.cca3}>Go to previous country</Link></p>
            <p><Link to={"/country-detail/" + nextCountry.cca3}>Go to next country</Link></p>
        </div>
    )
}

export default CountryDetail;