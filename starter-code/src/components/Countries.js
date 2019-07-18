import React from 'react'
import { Link } from 'react-router-dom'

function Country({ obj }) {
  return (
    <div className="list-group">
      <p className="list-group-item list-group-item-action">
        {obj.flag}
        {obj.name.common}
      </p>
    </div>
  )
}

export default function Countries(props) {
  return (
    <div>
      {props.countries.map((country, i) => (
        <Link key={i} to={`/${country.cca3}`}>
          <Country obj={country} />
        </Link>
      ))}
    </div>
  )
}
