import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default class CountryDetails extends Component {
  render() {
    const countryId = this.props.match.params.id;
    const country = countries.find((country) => country.cca3 === countryId);

    let borders;
    if (country.borders.length !== 0) {
      borders = country.borders.map((country) => {
        let borderCountry = countries.find((border) => border.cca3 === country);
        return (
          <li key={borderCountry.ccn3}>
            <Link to={`/${country}`}>{borderCountry.name.official}</Link>
          </li>
        );
      });
    } else {
      borders = <li>no borders</li>;
    }

    return (
      <div className="col-7">
        <h1>{country.name.official}</h1>
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
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{borders}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
