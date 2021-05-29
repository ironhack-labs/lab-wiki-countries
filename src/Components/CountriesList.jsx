import React from 'react';
import { Link } from "react-router-dom";
import countries from './../countries.json'

const CountriesList = () => {
  return (
    <div>
      {countries.map((country) => {
        const flag = `https://www.countryflags.io/${country.cca2}/flat/64.png`
        return (
          <div key={country.cca3}>
            <Link to={`/${country.cca3}`} key={country.cca3} className="list-group-item list-group-item-action"><img src={flag} alt={country.name.common} /> {country.name.common}</Link>
          </div>
        );
      })}
      
    </div>
  )
}

export default CountriesList
