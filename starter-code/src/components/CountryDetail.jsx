import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default function CountryDetail(props) {
  const findCountry = id => {
    const selectedCountry = country => {
      return country.cca3 === id
    }
    return countries.find(selectedCountry)
  }

  const foundCountry = findCountry(props.match.params.id)

  let countryArray = []
  foundCountry.borders.forEach((name, index) => {
    let myCountry = findCountry(name)
    countryArray.push(
      <li key={index}>
        <Link to={`/${myCountry.cca3}`}>{myCountry.name.common}</Link>
      </li>
    )
  })

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{foundCountry.name.common}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Capital: {foundCountry.capital[0]}</h6>
        <p class="card-text">Area: {foundCountry.area} km²</p>
        <small>Borders: {countryArray}</small>
        <p>Flag: {foundCountry.flag}</p>
      </div>
    </div>
  )
}
