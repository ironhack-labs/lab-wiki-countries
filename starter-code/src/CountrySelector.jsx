import React, { Component } from "react";
import countries from './countries.json';
import { Link } from 'react-router-dom';

export default class CountrySelector extends Component {
  sortCountries = (countries, callback = (a, b) => a.name.common.localeCompare(b.name.common)) => {
    return [...countries].sort(callback);
  }

  render() {
    return (
      <div className="countries-container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              {this.sortCountries(countries).map((country) => {
              return (<Link key={country.cca3} to={`/${country.cca3}`} className="list-group-item list-group-item-action">{`${country.flag} ${country.name.common}`}
              </Link>);
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}