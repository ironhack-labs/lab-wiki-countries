import React, { Component } from 'react';
import countries from '../countries.json';

class CountryDetail extends Component {
  render() {
    const CountryDetail = countries.filter((country) => {
      return country.cca3 === this.props.match.params.id;
    })[0];

    return (
      <div>
        <div>
          <h1>{CountryDetail.name.common}</h1>
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{CountryDetail.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {CountryDetail.area}
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {CountryDetail.borders.map((elem) => (
                    <li>
                      {elem}
                    </li>
                  ))}
                </td>
              </tr>
            </tbody>
          
        </div>
      </div>
    );
  }
}
export default CountryDetail;
