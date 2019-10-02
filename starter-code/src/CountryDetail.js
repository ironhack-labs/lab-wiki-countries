import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    return (
      <div className="col-7">
        <h1>{this.props.country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.props.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.country.borders.map((allCountries, idx) => {
                    let selectedCountry = this.props.allCountries.filter(
                      country =>
                        country.cca3
                          .toLowerCase()
                          .includes(allCountries.toLowerCase())
                    );

                    return (
                      <li key={idx}>
                        <Link to={`/${selectedCountry[0].cca3}`}>
                          {selectedCountry[0].name.common}
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
    );
  }
}
