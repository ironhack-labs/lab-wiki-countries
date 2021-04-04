import React from 'react';
import './CountriesList.css'
import { Link } from 'react-router-dom';


const CountriesList = (props) => {
  return (
    <ul className="countries-list">
      {props.countries.map(country => (
        <li key={country.cca3}><Link exact to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link></li>
      ))}
    </ul>
  )
}

export default CountriesList;