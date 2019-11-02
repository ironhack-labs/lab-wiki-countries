import React, { Component } from 'react';
import './CountryDetail.css';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import countries from '../../countries.json'

class CountryDetail extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    this.setState({
      countries: countries
    })
  }

  listCountries = (array) => {
    return array.map((country) => {
      return (
        <Link class="list-group-item list-group-item-action" to={`/${country.cca3}`}> { country.flag } { country.name.common } </Link>
      );
    });
  }
  
  render() {
    

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <Link to="/" className="navbar-brand">WikiCountries</Link>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div className="col-5 country-list">
            <div class="list-group">
              { this.listCountries(this.state.countries) }

            </div>
          </div>
          <div class="col-7">
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="width-30">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
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
  };
};

export default CountryDetail;