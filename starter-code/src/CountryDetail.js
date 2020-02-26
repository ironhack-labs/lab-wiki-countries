import React, { Component } from "react";
import countries from "./countries.json";
import "./App.css";
import { Link } from "react-router-dom";

export default class CountryDetails extends React.Component {
  render() {
    return (
      <div>
        {this.props.countries.map((country, idx) => {
          console.log(country.name.common);
          return (
            <div className="col-7">
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
                          console.log(border);
                          return (
                            <li>
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
