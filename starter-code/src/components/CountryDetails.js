import React from 'react'
import './CountryDetails.css'
import { Link } from 'react-router-dom'

const CountryDetails = ({ country }) => (

  <div>
    <h1>{country.name.official}</h1>

    <div className="CountryDetails-info">
      <h2>Capital</h2>
      <h2>{country.capital}</h2>
    </div>

    <div className="CountryDetails-info">
      <h2>Area</h2>
      <h2>{country.area}</h2>
    </div>

    <div className="CountryDetails-info">
      <h2>Borders</h2>
      <ul>
        {country.borders.map((border, i) => <li key={i}><Link to={`/${border}`}>{border}</Link></li>)}
      </ul>
    </div>

  </div>
)

export default CountryDetails