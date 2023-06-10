import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        <Link
          className="list-group-item list-group-item-action"
          to={`/${country.alpha3Code}`}
        >
          <h1> {country.name.common} </h1>
        </Link>;
      })}
    </div>
  );
}

export default CountriesList;
