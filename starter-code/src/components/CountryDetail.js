import React from 'react'
import countries from './../countries.json'
import {Link} from 'react-router-dom'
const CountryDetail = (props) => {
  const country = countries.find(e => e.cca3 === props.match.params.cca3)
  return (
    <React.Fragment>
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width:'30%'}}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((cca3,i)=>{
                  const pais = countries.find(e => e.cca3 === cca3)
                  return (
                    <li key={i}><Link to={`/country/${cca3}`}>{pais.name.common}</Link></li>
                  )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default CountryDetail