import React, { Component } from 'react';
import countries from './../countries.json';
import {Link}  from 'react-router-dom'


class CountriesList extends Component {
  state = {
    countriesList: countries,
  };
  render() {
    return (
      <div className="col-5" style={{ maxHeight: ' 90vh', overflow: 'scroll' }}>
        {this.state.countriesList.map((country) => {
          return (
            <div className="list-group" key={country.cca3}>
              <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">
                <span role="img">{country.flag}</span>
                {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
