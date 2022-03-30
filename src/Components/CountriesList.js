import React from 'react';
import { Link } from 'react-router-dom';

const renderCountries = (country, i) => {
  return (
    <div key={i}>
      <Link to={country.alpha2Code}>{country.name.official}</Link>
    </div>
  );
};

const CountriesList = ({ countryJSON }) => {
  console.log(countryJSON[0]);
  return (
    <div>
      <div>{countryJSON.map((country, i) => renderCountries(country, i))}</div>
    </div>
  );
};

export default CountriesList;
