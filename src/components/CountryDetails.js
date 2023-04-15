import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const CountryDetails = ({countries}) => {

  const {id} = useParams()
  const [country, setCountry] = useState({})

  useEffect(()=> {
    setCountry(countries.find(country => id == country.alpha3Code))
  }, [])

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>

        <tbody>
          <tr>
            <td className="w-30">Capital</td>
            <td>{[country.capital]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  country.borders.length > 0?
                  country.borders.map(border => {
                    return (
                      <li>
                        <Link to={`/:${border}`}>
                          {countries.find(country => border == country.alpha3Code) return country.name.common}
                        </Link>
                      </li>
                    )
                  })
                  : <></>
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  )
}

export default CountryDetails