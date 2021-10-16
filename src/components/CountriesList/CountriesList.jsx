import React from 'react';
import './Countries.css';
import { Link } from 'react-router-dom';

export default class CountriesList extends React.Component {
  render() {
    const countries = this.props.countries;
    return countries.map((country) => {
      return (
        <div className="country-row">
          <Link key={country.cca3} to={`/list/${country.cca3}`}>
            <div className="countries-list">
              <div>{country.flag}</div>
              <div>{country.name.common}</div>
            </div>
          </Link>
        </div>
      );
    });
  }
}
