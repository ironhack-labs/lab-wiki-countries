import { Link } from "react-router-dom"
import React from "react"
import countries from "../countries.json"

const CountriesList = () => {    
    return (
        <div>
        {countries.map((oneCountry)=> (
            <div className="list-group">
            <Link className="list-group-item list-group-item-action" to={`/${oneCountry.alpha3Code}`}>{oneCountry.name.common}</Link></div>
        ))}</div>)
}

export default CountriesList;