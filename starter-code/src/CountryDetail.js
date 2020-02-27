import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default class CountryDetail extends React.Component {
  render() {
    return (
      <div>
        {this.props.countries.map((country, idx) => {
          return (
            <div>
              <h1>{country.name.common}</h1>
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
                      <ul>
                        {country.borders.map((border, idx) => {
                          return (
                            <li key={idx}>
                              <Link to={"/" + border}>{border}</Link>
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
        })}
      </div>
    );
  }
}
