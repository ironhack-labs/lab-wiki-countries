import React, { Component } from 'react'
import { Link } from "react-router-dom";
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';

const CountryDetails = (props) => {
const countryCopy= [...countries]
return (
    <div className="countriesList">
    <h2>WikiCountries</h2>
        
       
        {countryCopy.map(eachCountry => {
        return (
            <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}} key={eachCountry.cca3}>
            <div className="list-group">
            <a className="list-group-item list-group-item-action">
            <Link to={`/${eachCountry.cca3}`}>{eachCountry.flag}{eachCountry.name.official}</Link>
            </a>
            </div>
            </div>
          </div>
        );
})}
        </div>
    )
};

export default CountryDetails;
