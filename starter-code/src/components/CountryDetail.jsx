import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import countries from '../countries.json';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const country = this.props.country;
    console.log(country);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                <a
                  className="list-group-item list-group-item-action"
                  href="/ABW"
                >
                  {country.flag} {country.name.common}
                </a>
              </div>
            </div>
            <div className="col-7">
              <h1>{country.name.official}</h1>
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
                        <li>
                          {country.borders.map(borders => {
                            return (
                              <Link to={`/${borders}`}>
                                <p>{borders}</p>
                              </Link>
                            );
                          })}
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
