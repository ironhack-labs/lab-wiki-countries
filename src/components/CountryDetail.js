import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './../countries.json';
//import CountriesList from './CountriesList'

const CountryDetail = (props) => {

    let countryDetail = countries.find(e => e.cca3 === props.match.params.cca3)

    return (
        <div className="container">
            <p>{countryDetail.name.common}</p>
            <p>{countryDetail.tld}</p>
        </div>
    )
}

export default CountryDetail;