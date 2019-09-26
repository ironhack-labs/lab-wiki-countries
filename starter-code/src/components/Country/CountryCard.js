import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  const { name, capital, area, borders } = country
  return (
    <>
      <h1>{country.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital[0]}</td>
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
                {borders.map((border, i) => (
                  <li>
                    <Link to={border}>{border}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CountryCard
