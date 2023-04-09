import React from 'react'
import { useParams } from 'react-router-dom'

function CountryDetail({ countries }) {
  const params = useParams()
  if (!countries) {
    return <></>
  }
  const country = countries
    .filter(country => country.alpha3Code === params.id)

    .shift()
  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
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
                {country.borders.map((border) => (
                  <li key={border}><a key={border} href="/AND">{border}</a></li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountryDetail