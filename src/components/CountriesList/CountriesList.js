import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default class CountriesList extends Component {
  render() {
    return (
      <div>
        {this.props.allCountries.map((elm) => {
          return (
            <div key={elm.cca3}>
              <Link to={`/countries/${elm.cca3}`}>
                <div className="country">
                  <p>{elm.name.official}</p>
                  <p>{elm.flag}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
