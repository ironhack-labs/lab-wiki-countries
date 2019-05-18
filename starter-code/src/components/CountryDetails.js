import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default function CountryDetails({match}) {
  const cnt = getCountry(match.params.id, 10);
  return (
    <div className="col-7">
      <h1>{match.params.id}</h1>
      <h1>{cnt.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{cnt.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{cnt.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {cnt.borders.map((border, index) => {
                  return (
                    <li key={index}><Link to={`/${border}`}>{getCountry(border).name.common}</Link></li>
                  )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const getCountry = (id) => {
  const compareCountry = country => {
    return country.cca3 === id;
  }
  return countries.find(compareCountry)
};