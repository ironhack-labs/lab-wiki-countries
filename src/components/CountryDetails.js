import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const CountryDetails = ({countries}) => {

  const {alpha3Code} = useParams()

  const [country, setCountry] = useState({})

  // Iteration 2.4
  /* const country = countries.find(country => alpha3Code === country.alpha3Code) */
  
  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setCountry(json)
    })
  }, [alpha3Code])

  const { name, capital, area, borders } = country

  return (
    <div className="col-7 text-start">
      
      <h1 className="font-weight-bold">{name.common}</h1>
        
      <table className="table">
        <thead></thead>

        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  borders.length > 0?
                  borders.map(border => {
                    return (
                      <li key={border}>
                        <Link to={`/:${border}`} style={{textDecoration: 'none'}}>
                          {countries.find(country => border === country.alpha3Code).name.common}
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