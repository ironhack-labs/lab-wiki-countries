import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {
  
  return (
    <div>
      {countries.map((country) => {
        return (
          <p key={country.cca3}>
            <Link exact to={`/${country.cca3}`}>
              {country.flag} - {country.name.common}
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default CountriesList;
