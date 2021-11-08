import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            className="list-group-item list-group-item-action"
            key={country.cca3}
            to={`/${country.cca3}`}
          >
            {country.flag} {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CountriesList;
