import React from 'react'
import {Link} from 'react-router-dom'
import countries from './../countries.json'
const CountryList = () => {
  return (
    <div className="list-group">
      {countries.map((e,i)=>(
        <Link to={`/country/${e.cca3}`} className="list-group-i" key={i}>{e.name.official}</Link>
      ))}
    </div>
  )
}
export default CountryList