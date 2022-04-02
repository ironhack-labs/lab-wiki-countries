import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCountries } from '../services/CountryService'
import './CountriesList.css'

export const CountriesList = () => {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCountries()
      .then( data => {
        setCountries(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className='CountriesList'>
      { loading ? (
        <p>Loading...</p>
        ) : (
          countries.map( country => {
            const { name, alpha2Code, alpha3Code } = country
            return (
              <Link key={alpha3Code} to={`/${alpha3Code}`}>
                <div className='country d-flex justify-content-center align-items-center flex-column'>
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt=''></img>
                  <h4 className='title mt-3'>{name.common}</h4>
                </div>
              </Link>
            )
          })
        )
      }
    </div>
  )
}
