import React from 'react';
import countries from "../countries.json";
import {Link} from "react-router-dom";

export default function CountriesList() {
    const countriesList = countries.slice(0,19).map(country => {
        return (
        <Link style={{width:"30%"}}className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.name.official}</Link>
        )
    })
    return (
        <div className="list-group">
            {countriesList}
        </div>
    )
}
