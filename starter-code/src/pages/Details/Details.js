import React from 'react'

import Countries from '../../countries.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'

const Details = (props) => {
  const foundCountry = Countries.find(
    (elm) => props.match.params.id === elm.cca3
  )

  console.log(foundCountry.borders)

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <p>{foundCountry.name.official}</p>
      <hr/>
      <p>Capital: {foundCountry.capital}</p>
      <p>Area: {foundCountry.area} km<sup>2</sup> </p>
      <p>Borders:</p>
      <ul>
        {foundCountry.borders.forEach(country => (<li>{country}</li>))}
      </ul>
    </div>
  )
}

export default Details
