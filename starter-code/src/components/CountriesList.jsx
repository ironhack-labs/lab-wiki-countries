import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => (
  <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    <div className="list-group">
      {countries
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((country) => (
          <Link
            key={country.cca3}
            className="list-group-item list-group-item-action"
            to={`/country/${country.cca3}`}
          >
            <span role="img" aria-label="emoji">
              {country.flag}
            </span>
            {country.name.common}
          </Link>
        ))}
      <Link className="list-group-item list-group-item-action" to="/ABW">
        <span role="img" aria-label="emoji">
          🇦🇼
        </span>
        Aruba
      </Link>
    </div>
  </div>
);

export default CountriesList;
