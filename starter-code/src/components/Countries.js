import React from 'react'
import './Countries.css'
import {Link} from "react-router-dom";
import myCountries from "../countries.json";

export default function Countries() {
  return (
    <div className="App-countries">
      {myCountries.map((country) => {
        return (
        <div className="country-container">
            <Link to={`/details/${country.cca3}`} >
            <div key={country.cca3}>
            {country.flag} {country.name.common}
            </div>
            </Link> 
        </div>
        )
      })}
    </div>
  )
}