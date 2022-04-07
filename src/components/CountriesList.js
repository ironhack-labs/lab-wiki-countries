import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
  const countriesInfo = countries.map((country) => {
    return (
      <Link
        key={country.alpha3Code}
        to={`/countries-list/${country.alpha3Code}`}
      >
        {country.name.common}
      </Link>
    );
  });

  return <div>{countriesInfo}</div>;
};

export default CountriesList;
