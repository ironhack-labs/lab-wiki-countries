import React from 'react';
import countriesJSON from './../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div>
      {countriesJSON.map((country, index) => {
        return (
          <div key={index}>
            <Link to={`/countries/${country.name.common}`}>
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
