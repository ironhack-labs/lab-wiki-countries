import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ countries, getCountry }) => {
  return (
    <div className='list-group'>
      {countries.map(country => (
        <Link key={country.cca3} className='list-group-item list-group-item-action' to={`/${country.cca3}`}>
          <span role='img' aria-label={country.name.common}>
            {country.flag}
          </span>{' '}
          {country.name.common}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
