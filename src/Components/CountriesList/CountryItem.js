import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryItem({ name, cca3 }) {
  return (
    <div>
      <Link to={`/${cca3}`}>{name.common}</Link>
      <hr />
    </div>
  )
}