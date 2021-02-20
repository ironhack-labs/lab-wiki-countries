import React from 'react';
import { Link, Route } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  
  return (
    <div>
      {countries.map((country) => (
        <Route key={country.cca3}>
          <Link
            className="list-group-item list-group-item-action"
            to={`/${country.cca3}`}
          >
            {country.flag} {country.name.official}
          </Link>
        </Route>
      ))}
    </div>
  );
};

export default CountriesList;
