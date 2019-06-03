import React from 'react'
import {Link} from 'react-router-dom'
import countries from './../countries.json'
import ReactCountryFlag from "react-country-flag";

const CountryList = () => {
  return (
    <div className="list-group">
      {countries.map((country,i)=>(
        <Link to={`/country/${country.cca3}`} className="list-group-i" key={i}>
          <ReactCountryFlag code={country.cca2.toLowerCase()} />
          {country.name.official}
        </Link>
      ))}
    </div>
  )
}
export default CountryList