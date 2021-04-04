import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../countries.json';

const CountriesList = () => {
  console.log(Data)
  return (
    <div>
      {Data.map((country) => {
        return (
          <p key={country.cca3}>
            <Link to={`/${country.cca3}`}>
              {country.flag} - {country.name.common}
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default CountriesList;
