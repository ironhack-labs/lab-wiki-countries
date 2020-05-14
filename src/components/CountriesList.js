import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

const myCountries = countries;

class CountriesList extends Component {
  state = { username: 'YOUR NAME' };

  render() {
    return (
      <div>
        <div className="list-group">
          {myCountries.map((country) => {
            return (
              <Link
                key={country.cca3}
                to={`/country-details/${country.cca3}`}
                className="list-group-item list-group-item-action"
                exact
              >
                {' '}
                {country.name.common} {country.flag}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
