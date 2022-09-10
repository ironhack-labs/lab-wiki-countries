import React from 'react';
import countriesData from '../countries.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div>
      <ul>
        {countries.map((country) => {
          return (
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
