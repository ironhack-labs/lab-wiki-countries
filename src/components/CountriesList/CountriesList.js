import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default class CountriesList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div id="countries-list" className="col-5">
        <div className="list-group">
          {countries.map((country) => {
            return (
              <Link
                key={country.cca3}
                to={`/${country.cca3}`}
                className="list-group-item list-group-item-action"
              >
                {country.cca3 + ' ' + country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
