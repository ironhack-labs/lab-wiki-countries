import React, { Component } from "react";
import countries from "./../countries";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
    this.fullName = this.fullName.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const cca3 = props.match.params.id;
    const country = countries.find(item => item.cca3 === cca3);
    return {
      ...state,
      country
    };
  }

  fullName(cca3) {
    const country = countries.find(item => item.cca3 === cca3);
    return country.name.common;
  }

  render() {
    const country = this.state.country;
    console.log(country);
    return (
      <div>
        <h1>{country.name.common}</h1>
        <table class="table table-dark">
          <tbody>
            <tr>
              <th scope="row">Capital</th>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <th scope="row">Area</th>
              <td>{country.area} km2</td>
            </tr>
            <tr>
              <th scope="row">Borders with:</th>
              <td>
                <ul>
                  {country.borders.map(border => (
                    <li>
                      <Link to={border}> {this.fullName(border)}</Link>
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
