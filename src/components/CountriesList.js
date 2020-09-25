import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountriesList() {
  return (
    <div
      className="col-5 list-group"
      style={{ maxHeight: '90vh', overflow: 'scroll' }}
    >
      {countries.map((country) => {
        return (
          <div
            key={country.cca3}
            className="list-group-item list-group-item-action"
          >
            <Link to={`/${country.cca3}`}>
              <p>
                {country.flag} {country.name.common}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
