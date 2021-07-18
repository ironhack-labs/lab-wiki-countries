import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CountryDetails extends Component {
    render() {
        const {countryCode} = this.props.match.params
        const {countries} = this.props
        const singleCountry = countries.find((country) => country.cca3 === countryCode)

        return (
                <div className="col-7">
                    <h1>{singleCountry.name.common}</h1>

        <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{singleCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {singleCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {singleCountry.borders.map((countryCode, i) => {
                  return (
                    <li key={'border' + i}>
                      <Link to={`/countries/${countryCode}`}>
                        {countries.map((country, i) => {
                          if (country.cca3 === countryCode) {
                            return (
                              <p key={'borderlink' + i}>{country.name.common}</p>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </Link>
                    </li>
                  );
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
