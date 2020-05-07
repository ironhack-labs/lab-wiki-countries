import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  render() {
    const countryDet = countries.filter((country) => {
      return country.cca3 === this.props.match.params.id;
    })[0];

    return (
      <div>
        <div class="col-7">
          <h1>{countryDet.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryDet.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDet.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {countryDet.borders.map((i) => (
                    <li>
                      <Link to={`/${i}`}>{i}</Link>
                    </li>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default CountryDetail;
