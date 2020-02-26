import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
    render() {
        return(
            <div class="col-7">
              <h1>{this.props.country.name.common}</h1>
              <table class="table">
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
                        {this.props.country.borders.map(border => (
                          <li>
                          <Link to={border}>{this.props.country.borders[border]}</Link>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        )
    }
}