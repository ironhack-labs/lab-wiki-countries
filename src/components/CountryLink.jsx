import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ country }) => {
  return (
    <div>
      <img className="mr-2" src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} width="20"/>
      <Link to={`/${country.cca3}/details`}>{country.name.common}</Link>
    </div>
  );
};

export default CountryLink;
