import React, { Component } from 'react';
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
            <th>Capital</th>
            <th>{country.capital}[0]</th>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area}</td>
          </tr>
          <tr>
            <td>Border</td>
            <td>
              <ul>
                {this.state.countries.map((country, index) => {
                  return (
                    <li key={index}>
                      {this.countryPerCode(country).name.official}
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
