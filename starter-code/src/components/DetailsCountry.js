import React from 'react'
import { NavLink } from 'react-router-dom'

function DetailsCountry({ country, borders }) {
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
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="text-left">
                {borders.map((border, i) => (
                  <li key={i}>
                    <NavLink to={`/${border.cca3}`}>{border.name}</NavLink>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailsCountry
