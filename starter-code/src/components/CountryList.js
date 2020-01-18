import React from 'react'
import './CountryList.css'
import { Link } from 'react-router-dom'

const CountryList = ({ id, name, flag }) => {
  return (
    <div className="country">
      <Link to={`/${id}`}>{flag} => {name}</Link>
    </div>
  )
}

export default CountryList