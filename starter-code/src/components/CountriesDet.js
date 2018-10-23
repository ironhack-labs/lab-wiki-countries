import React from "react";
import countries from './../countries.json';
import { Link } from 'react-router-dom';


export const CountriesList = countries;


export const countryList = () => {
    return (
        <ul>
            {
                CountriesList.map(country => {
                    return (
                        <li key={country.cca3} className="list-group-item list-group-item-action" style={{width: '40%'}} >
                            <img src={country.flag} style={{margin: '10px'}}/><Link to={`/countrydetail/${country.cca3}`}>{country.name.common}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}




