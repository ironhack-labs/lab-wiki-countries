import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CountriesList extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get('https:ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        this.setState({
          countries: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container list-group">
        {this.state.countries.map((country, index) => {
          return (
            <div className="row">
              <div className="col-5 list-group-item">
                <div>
                  <div key={index}>
                    <Link
                      to={`/${country.alpha3Code}`}
                    >
                      {country.name.common}
                      <br />
                      <br />
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`.toLowerCase()}
                   alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-7 list-group-item">
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
                          {country.borders.map((borderCountry, index) => {
                            return (
                              <li key={index}>
                                <Link to={`/${borderCountry}`}>
                                  {borderCountry}
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
            </div>
          );
        })}
      </div>
    );
  }
}
