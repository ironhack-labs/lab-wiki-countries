import React from 'react';
import countriesList from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countriesList.map((country) => {
          return (
            <Link
              to={`/${country.cca3}`}
              className="list-group-item list-group-item-action"
              key={country.cca3}
            >
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
