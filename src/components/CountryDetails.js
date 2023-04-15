import React from 'react'
import { useParams, Link } from 'react-router-dom'

const CountryDetails = ({countries}) => {

  const {alpha3Code} = useParams()

  const country = countries.find(country => alpha3Code === country.alpha3Code)

  const { name, capital, area, borders } = country

  return (
    <div className="col-7">
        
      <h1>{name.common}</h1>
        
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
                        <Link to={`/:${border}`}>
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