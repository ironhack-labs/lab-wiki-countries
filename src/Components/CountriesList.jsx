import React from 'react';
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountriesList = () => {
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.cca3}>
            <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.name.common}</Link>
          </div>
        );
      })}
      
    </div>
  )
}

export default CountriesList
