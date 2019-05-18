import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default function Countries() {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }} >
      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <Link key={index} to={`/${country.cca3}`}
            className="list-group-item list-group-item-action">{country.flag}{country.name.common}</Link>
          )
        })}
      </div>
    </div>      
  )
}
