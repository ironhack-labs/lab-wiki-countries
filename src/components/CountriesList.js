import React, { Component } from 'react'
import countries from "../countries.json";
import { Link } from "react-router-dom";


const CountriesList = () => {
    return(
        <div className="paises">
        {countries.map((country, index) => {
            return (
              <div className="country" key={index} >
                <h4><Link to={`/${country.cca3}`}><img src={country.flag}/>{country.name.common}</Link></h4>
              </div>
            )
        })}
        </div>
    )
}
 


export default CountriesList;

