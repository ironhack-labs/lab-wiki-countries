import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default class CountryDetail extends Component {
  state = {
    countries: countries,
  };

  countryPerCode = (code) => {
    return this.state.countries.filter((country) => {
      return country.cca3 === code;
    })[0];
  };

  render(props) {
    const countryCode = this.props.state.match.params.cca3;
    const country = this.countryPerCode(countryCode);
    return (
      <div>
        <h1>{country.name.official}</h1>
        <hr />
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
    );
  }
}
