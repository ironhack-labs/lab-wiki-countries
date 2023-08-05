import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code} className="country-container">
          <Link
            to={`/${country.alpha3Code}`}
            className="country-link d-flex align-items-center"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} Flag`}
              className="mr-2"
            />
            {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;