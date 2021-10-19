import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default class CountriesList extends React.Component {
  render() {
    const countries = this.props.countries;
    return countries.map((country) => {
      return (
        <div className="country-row">
          {' '}
          <div>
            <Link key={country.cca3} to={`/list/${country.cca3}`}>
              <ul className="list-group">
                <li class="list-group-item">{country.flag}</li>
                <li class="list-group-item">{country.name.common}</li>
              </ul>
            </Link>
          </div>
        </div>
      );
    });
  }
}
