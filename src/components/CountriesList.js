import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  render() {
    return (
      <div className="col-5">
        <div className="list-group">
          {/* <a className="list-group-item list-group-item-action" href="/ABW">
            🇦🇼 Aruba
          </a> */}
          {this.props.countries.map((country) => {
            return (
              <Link
                to={`/${country.cca3}`}
                className="list-group-item list-group-item-action"
                key={country.ccn3}
              >
                {country.flag} {country.name.official}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
