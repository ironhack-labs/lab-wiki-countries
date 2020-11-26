import React from 'react'
import { Link } from 'react-router-dom'
import dataCountries from '../countries.json'

export default function CountriesList() {
  const countries = [...dataCountries]
  console.log(countries[1])

  return (
    <ul className="list-group">
      {countries.map(country => (
        <li className="list-group-item">
        <Link to={`/country/${country.cca3}`}>
        {country.name.common}
        </Link>
        </li>
      ))}
    </ul>
  )
}