import React, { Component } from 'react'
import './CountryDetail.css';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {

  countryName = (code) => {
    console.log(code)
    return countries.find(country =>
      country.cca3 === code).name.common
  }

  render() {
    const country = countries.find(country => {
      return country.cca3 === this.props.match.params.cca3
    }
    )

    return (
      <div>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="capital-title">Capital</td>
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
                  {country.borders.map((country, index) =>
                    <li key={index}><Link to={`/${country}`}>{this.countryName(country)}</Link></li>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
