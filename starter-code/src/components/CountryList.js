import React from 'react'
import {Link} from 'react-router-dom'
import countries from './../countries.json'
import ReactCountryFlag from "react-country-flag";

const CountryList = () => {
  return (
    <div className="list-group">
      {countries.map((e,i)=>(
        <Link to={`/country/${e.cca3}`} className="list-group-i" key={i}>
          <ReactCountryFlag code={e.cca2.toLowerCase()} />
          {e.name.official}
        </Link>
      ))}
    </div>
  )
}
export default CountryList