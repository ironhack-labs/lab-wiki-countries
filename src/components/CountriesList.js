import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div className="list">
        {this.props.countries.map((country, index) => {
          return (
            <div className="list-items" key={index}>
              <Link to={country.cca3}>
                {country.flag} {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
