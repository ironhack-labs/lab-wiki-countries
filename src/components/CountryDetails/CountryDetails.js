import React from 'react';
import countries from '../../countries.json';
import {useParams, Link} from "react-router-dom"

export function CountryDetails() {
 
    const { countryId } = useParams();
    // custonhook params
    const country = countries.find(country => country.cca3 === countryId)
    console.log("country" , country)
  return (
    <div className="col-7">
    <h1>{country.name.common}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{country.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
          {country.capital}
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {country.borders.map((borderCode)=>{
                const borderCountry = countries.find(country => country.cca3 === borderCode)
                return <li><Link to={`/${borderCode}`}>{borderCountry.name.common}</Link></li>
              })}

              
              <li><a href="/BEL">Belgium</a></li>
              <li><a href="/DEU">Germany</a></li>
              <li><a href="/ITA">Italy</a></li>
              <li><a href="/LUX">Luxembourg</a></li>
              <li><a href="/MCO">Monaco</a></li>
              <li><a href="/ESP">Spain</a></li>
              <li><a href="/CHE">Switzerland</a></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}