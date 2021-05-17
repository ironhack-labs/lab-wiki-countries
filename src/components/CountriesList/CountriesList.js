import React from 'react';

import { Link } from 'react-router-dom';

import './CountriesList.css';

import countries from '../../countries.json';

export default class CountriesList extends React.Component {
  state = {
    countries: countries,
  };

  render() {
    return (
      <div className="column">
        {this.state.countries.map((country) => {
          return (
            <Link key={country.cca3} to={`countries/${country.cca3}`}>
              <h3>
                {country.flag} {country.name.common}
              </h3>
            </Link>
          );
        })}
      </div>
    );
  }
}
