import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {
  findCountry(cca3) {    
    return this.props.countries.filter((country) => country.cca3 === cca3);
  }

  render() {
    let country = this.findCountry(this.props.match.params.cca3)[0];
    let borders = country.borders;
    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
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
                  {borders.map((border) => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>
                          {this.findCountry(border)[0].name.common}
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
