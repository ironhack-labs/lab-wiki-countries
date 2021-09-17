import React from 'react';
import './CountriesList.css';
import countries from '/Users/andrekleine/Documents/ironhack/m2/w4/lab-wiki-countries/src/countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
              key={country.cca3}
            >
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;