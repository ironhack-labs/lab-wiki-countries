import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function CountryDetailsPage () {
  const { countryId } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {
        setCountry(response.data)
      })
      .catch(error => console.error(error))
  }, [countryId])

  if (!country) {
    return <div className='container'>Loading...</div>
  }

  return (
    <div className='container'>
      <h1>{country.name.common}</h1>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Area:</strong> {country.area} km²
      </p>
      <p>
        <strong>Borders:</strong>
      </p>
      <ul>
        {country.borders.map(border => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountryDetailsPage
