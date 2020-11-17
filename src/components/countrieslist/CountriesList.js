import React from 'react';
import { Link } from 'react-router-dom';

import countries from '../../countries.json';
import './CountriesList.css';

function CountriesList() {
  return (
    <div className="col-4 countrieslist">
      <ul className="list-group">
        {countries.map((country, i) => (
          <li key={i}>
            <Link
              className="list-group-item list-group-item-action"
              to={`/country/${country.name.common.toLowerCase()}`}
            >
              <strong>{country.flag}</strong> {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
