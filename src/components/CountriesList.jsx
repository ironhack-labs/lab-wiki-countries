import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link
            key={country.alpha3Code}
            to={country.alpha3Code}
            className="list-group-item list-group-item-action"
          >
            {country.name.common}
          </Link>
        );
      })}
    </div>
  );
};
export default CountriesList;
