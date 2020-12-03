import React, { Component } from 'react';
import countries from '../countries.json';

import { NavLink } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div className="flow list-group">
        {this.props.countries.map((country) => {
          return (
            <div>
              <NavLink
                className="list-group-item list-group-item-action"
                activeClassName="active"
                to={`/countries/${country.cca3}`}
              >
                <p>
                  {country.flag} {country.name.official}
                </p>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CountriesList;
