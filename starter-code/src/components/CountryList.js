import React from 'react'
import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

const CountryList = (props) => {
  return (
    <div className="list-group">
    {props.data.map((e, i) => {
      return <a className="list-group-item list-group-item-action" href={e.cca3} key={i}><ReactCountryFlag code={e.cca2.toLowerCase()} svg /> {e.name.common}</a>
    })}
  </div>
  )
}

export default CountryList

