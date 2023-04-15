// src/components/CountriesList.js

import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="list-group">
      {countries.map(country => (
        <Link
          key={country.alpha3Code}
          to={`/${country.alpha3Code}`}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name}
            className="mr-2"
            width="72"
            height="54"
          />
          {country.name}
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;
