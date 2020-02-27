import React, { Component } from 'react'
import Countries from './../countries.json'
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {

    const getCountryById = (cca3) =>{
        const result = Countries.find((oneCountry) => oneCountry.cca3 === cca3)
        return result;
    }

    const {countryId} = props.match.params;
    const countryToDisplay = getCountryById(countryId)

    return (
        <div >
            <h3>COUNTRY DETAILS</h3>
            <h4>Name: {countryToDisplay.name.official}</h4>
            <hr />
            <p> Capital: {countryToDisplay.capital}</p>
            <hr / >
            <p> Region: {countryToDisplay.region}</p>
            <hr />
            <p>Area: {countryToDisplay.area} km2</p>
            <hr />
            <ul>{countryToDisplay.borders.map(oneBorder => {
                return (
                    <Link to={`/countries/${oneBorder}`}>
                        <div key={oneBorder}>
                        <li>{oneBorder}</li> 
                        </div>
                    </Link>
                );
            })}</ul>
        </div>
    )
}

export default CountryDetail;
