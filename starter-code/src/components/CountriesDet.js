import React from "react";
import countries from './../countries.json';
import { Link } from 'react-router-dom';


export const CountriesList = countries;


export const countryList = () => {
    return (
        <ul id="get-back-top-page">
            {
                CountriesList.map(country => {
                    return (
                        <li key={country.cca3} className="list-group-item list-group-item-action">
                            <img src={country.flag} style={{margin: '5px'}} alt=""/><Link to={`/countrydetail/${country.cca3}`} style={{color: 'inherit'}}><a href="#">{country.name.common}</a></Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}




