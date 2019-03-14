import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default class CountryDetails extends Component {

  render() {
    var country = countries
      .find(country => country.cca3 === this.props.countryCode);
    if (country === undefined) {
      return (
        <div>
          <h1>Neutral</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>City</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>47 km
                    <sup>2</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{country.flag} {country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
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
                    {country.borders.map((border) => {
                      return <li style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}><Link to={border} >
                        {border}</Link></li>
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }
}
