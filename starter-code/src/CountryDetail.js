import React, { Component } from "react";
import { Link } from 'react-router-dom';
import countries from "./countries.json";

export default class CountryDetail extends Component {
  render() {
    const selectedCountry = [...countries].find(
      country => country.cca3 === this.props.match.params.id
    );

    const borderCountries = [...countries].filter(
      country => selectedCountry.borders.includes(country.cca3)
    )

    return (
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2"><h1>{selectedCountry.flag} {selectedCountry.name.common}</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Capital</th>
            <td>{selectedCountry.capital}</td>
          </tr>
          <tr>
            <th scope="row">Area</th>
            <td>{selectedCountry.area}</td>
          </tr>
          <tr>
            <th scope="row">Borders</th>
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
