import React, { Component } from "react";
import Countries from "../countries.json";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  render() {
    return (
      <div>
        {Countries.map((country, index) => {
          if (country.cca3 === this.props.match.params.id) {
            return (
              <div key={index}>
                <table>
                  <thead>
                    <tr>
                      <th>{country.name.common}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Capital</td>
                      <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                      <td>Área</td>
                      <td>{country.area}</td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          {country.borders.map((borderCountry, index) => {
                            return <li key={index}><Link to={`/countries/${borderCountry}`}>{borderCountry}</Link></li>
                          })}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default CountryDetails;
