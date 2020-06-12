import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import countriesFromJason from '../countries.json'


function CountryDetail (props) {

    let countryDetails = countriesFromJason.find((country) => country.cca3 === props.match.params.id)
    let countriesBorders = countriesFromJason.filter((country) => country.borders.includes(countryDetails.cca3))
    return (
        <div>
            <div> Capital: {countryDetails.capital}</div>
            <div> Area : {countryDetails.area}</div>
            <div> Borders : {countriesBorders.map((country, index) => { return (
                <div key={index}>
                <Link to={"/" + country.cca3}>{country.name.common}</Link>
                </div>
                 )})}
            </div>
             
        </div>
    )
}

export default CountryDetail