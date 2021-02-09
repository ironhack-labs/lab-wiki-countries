import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div>
      <ul className="list-group">
        {countries.map((country, idx) => (
          <li key={country.cca3}>
            <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">
              {country.flag} {country.name.common}
            </Link>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default CountriesList;
