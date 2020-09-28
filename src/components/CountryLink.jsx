import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ country }) => {
  return (
    <div>
      <Link to={`/${country.cca3}/details`}>{country.name.common}</Link>
    </div>
  );
};

export default CountryLink;
