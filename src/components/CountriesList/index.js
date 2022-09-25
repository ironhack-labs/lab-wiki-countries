import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div>
      {countries.map((country) => {
        const { alpha3Code, name } = country;
        return (
          <div key={alpha3Code}>
            <Link to={`/${alpha3Code}`}>{name.official}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
