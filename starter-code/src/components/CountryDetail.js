import React, { Component } from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor() {
    super();
    this.state = {
      countries
    };
  }

  render() {
    let countrySelection = this.state.countries.filter(
      country => country.cca3 === this.props.match.params.cca3
    )[0];
    let borders = countrySelection.borders.map((border, i) => {
      let countryName = this.state.countries.filter(
        country => country.cca3 === border
      )[0];
      return (
        <li key={i}>
          <Link to={border}>{countryName.name.common}</Link>
        </li>
      );
    });
    return (
      <div className="col-7">
        <h1>{countrySelection.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countrySelection.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countrySelection.area} km
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
