import React, { Component } from "react";
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetail extends Component {
  render() {
    const Country = [...countries].find(
      country => country.cca3 === this.props.match.params.id
    );

    const borderCountries = [...countries].filter(
      country => Country.borders.includes(country.cca3)
    )

    return (
      <table>
        <thead>
          <tr>
            <th><h1>{Country.flag} {Country.name.common}</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Capital</th>
            <td>{Country.capital}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{Country.area}</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
            {
              borderCountries.map(
                country => <li key={country.cca3}><Link to={`/${country.cca3}`}>{country.name.common}</Link></li>
              )
            }
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CountryDetail