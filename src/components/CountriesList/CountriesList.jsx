import countries from '../../countries.json';
import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default class CountriesList extends React.Component {

  render() {
    return(
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            <Link to={`/countries/${country.cca3}`}>
              <h4>{country.name.common}</h4>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

