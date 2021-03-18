import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

class CountryDetails extends Component {
  render() {
    const selectedCountry = countries.find(
      (country) => country.cca3 === this.props.match.params.cca3
    );

    return (
      <div className="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {selectedCountry.area} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {selectedCountry.borders.map((border) => {
                    const findCountry = countries.find(
                      (country) => border === country.cca3
                    );
                    return (
                      <li>
                        <Link to={`/${findCountry.cca3}`}>
                          {findCountry.name.common}
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

export default CountryDetails;
