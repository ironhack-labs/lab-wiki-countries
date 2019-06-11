import React, { Component } from 'react'
import countries from '../src/countries.json'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

class CountryDetail extends Component {

  findCountry(cca3) {
    return countries.find((country) => country.cca3 === cca3)
  }

  findBorders(cca3) {
    const selectedCountry = countries.find((country) => country.cca3 === cca3)
    return selectedCountry.borders
  }

  render() {
    const country = this.findCountry(this.props.match.params.countryId)
    const borders = this.findBorders(this.props.match.params.countryId)
    const borderCountries = borders.map((borderCca3) => {
        return this.findCountry(borderCca3)
      })
    return (
      <div>
        <div className="container">
          <div className="row">
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
                    <td>{country.area} km
                    <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                      {borderCountries.map((borderCountry) => {
                                   return <li><Link to= {`${borderCountry.cca3}`} key={`${borderCountry.cca2}`} className="list-group-item list-group-item-action">{borderCountry.flag} {borderCountry.name.common}</Link></li>
                                })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryDetail;