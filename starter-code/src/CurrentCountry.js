import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom'

export default class CurrentCountry extends Component {
  render() {
    const currentCountry = countries.filter(country => country.cca3 === this.props.country)[0]
    if (!currentCountry) return null

    return (
      <div className="col-7">
        <h1>{currentCountry.name.official || currentCountry.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{currentCountry.capital[0] || 'Not available'}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {currentCountry.area || 0} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {currentCountry.borders.length !== 0
                    ? currentCountry.borders.map((border, i) => (
                        <li key={i}>
                          <Link to={'/' + border}>
                            {countries.filter(country => country.cca3 === border)[0].name.official}
                          </Link>
                        </li>
                      ))
                    : 'This country has no borders'}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
