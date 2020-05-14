import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import countries from './../countries.json';


class CountriesList extends Component {
  // first we need to store in the state the list of countries
  //we can use it to update the component

  state = {
    countries: countries,
  };

  render() {
    return (
      <div>
        <h1>WikiCountries</h1>
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {this.state.countries.map((countryObj) => {
              return (
                <NavLink
                  className="list-group-item list-group-item-action"
                  to={`/${countryObj.cca3}`}
                >
                  {countryObj.name.common}
                  {countryObj.flag}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesList;
