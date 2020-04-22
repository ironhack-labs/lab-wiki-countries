import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {

  getCountryByCode = (code) => {
    return this.props.countries.filter(c => c.cca3 === code)[0]
  }

  render() {
    const oneCountry = this.getCountryByCode(this.props.countryCode)
    return (
      <div className="col-7">
        <h1>{oneCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%'}}>Capital</td>
              <td>{ oneCountry.capital }</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{oneCountry.area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {oneCountry.borders.map((c, i) => {
                    return (
                      <li key={i}>
                        <Link to={c}>{this.getCountryByCode(c).name.common}</Link>
                      </li>
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
}
