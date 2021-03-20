import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link className="list-group-item list-group-item-action" key={country.cca3} to={`/country/${country.cca3}`}>
            {country.flag} {country.name.common}
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
