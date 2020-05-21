import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country, index) => (
          <Link
            to={`/country/${country.cca3}`}
            className="list-group-item list-group-item-action"
            key={`${index + 1}-country`}
          >
            <img
              src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
              alt={country.name}
            />
            <h2>{country.name.common}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
