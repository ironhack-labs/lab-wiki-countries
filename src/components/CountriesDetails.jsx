import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function CountriesDetails({ countries }) {
    
  const { id } = useParams()

  const country = countries.find((c) => c.alpha3Code === id)

  if (!country) return null

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
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
              <ul style={{ listStyle: "none" }}>
                {country.borders.map((b) => {
                  const borderCountry = countries.find((c) => c.alpha3Code === b)
                  return (
                    <li key={b}><Link to={`/${b}`}>{borderCountry.name.common}</Link></li>
                  )
                }
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
