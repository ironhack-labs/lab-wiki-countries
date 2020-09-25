import React from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";

export default function CountriesList(props) {
    console.log(props)
    return (
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        
        <h1>Countries</h1>
        <div className="list-group">
        {countries.map(country => {
        return(
            <Link key={country.cca3} to={`/${country.cca3}`} className="list-group-item list-group-item-action"> {country.flag}{country.name.official} </Link>
       )
        })}  
          </div>
        </div>
    )
}
