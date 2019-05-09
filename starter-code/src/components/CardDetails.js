import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default function CardDetails(props) {
  console.log(props)

  const getCountry = id => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id
    }
    return countries.find(theCountry)
  }

  const { params } = props.match
  const foundCountry = getCountry(params.id)

  return (
    <div>
      <h2>Name: {foundCountry.name.common}</h2>
      <h3>Capital: {foundCountry.capital[0]}</h3>
      <h3>Area: {foundCountry.area}</h3>
      <p>Borders: {foundCountry.borders}</p>
    </div>
  )
}
