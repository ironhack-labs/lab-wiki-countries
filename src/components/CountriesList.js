import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import countriesFromJason from '../countries.json'
import { Link } from 'react-router-dom'

function CountriesList () {

    return(
        <div>
            <h2>Countries</h2>
            {countriesFromJason.map((country, index) => {
                 return (
                     <div key={index}>
                     <h4><Link to={"/" + country.cca3}>{country.name.common}</Link></h4>
                     </div>
                 )
                 })}
        </div>
    )
                
}

export default CountriesList