import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";

export class CountryDetails extends Component {
  render() {
    const id = this.props.match.params.cca3;
    const country = countries.find(country => {
      return country.cca3 === id;
    });

    const countryName = cca3 => {
      const cntry = countries.find(country => {
        return country.cca3 === cca3;
      });
      return cntry.name.common;
    };

    const borders = country.borders.map(country => {
      console.log(countryName(country));
      return (
        <li key={country}>
          <Link to={country}>{countryName(country)}</Link>
        </li>
      );
    });
    //console.log(country);
    //console.log(id);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <h1>{country.name.common}</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <hr />
            <tr>
              <th>Capital</th>
              <td>{country.capital}</td>
            </tr>
            <hr />
            <tr>
              <th>Area</th>
              <td>{country.area}</td>
            </tr>
            <hr />
            <tr>
              <th>Borders</th>
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

export default CountryDetails;
