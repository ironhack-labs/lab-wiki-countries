import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div>
      <h1>List of Countries</h1>

      {countries.map((country) => {
        return (
          <div key={country.cca3e}>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
