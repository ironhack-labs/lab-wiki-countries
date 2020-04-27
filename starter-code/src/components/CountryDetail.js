import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

export default class CountryDetail extends Component {
  countryList = (cca3) => {
    const country = countries.find((country) => country.cca3 === cca3);

    return country.name.common;
  };
  render() {
    const { params } = this.props.match;
    const foundCountry = countries.find(
      (country) => country.cca3 === params.id
    );

    return (
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{foundCountry.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((cca3, index) => (
                    <li key={index}>
                      <Link to={`/${cca3}`}>{this.countryList(cca3)}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
