import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div>
      {props.countries.map((country) => (
        <div key={country.ccn3}>
          <Link to={`/countries/${country.cca3}`}>
            <img
              src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
              alt={country.name.official}
            />
            {country.name.official}
          </Link>
        </div>
      ))}
    </div>
  );
}
