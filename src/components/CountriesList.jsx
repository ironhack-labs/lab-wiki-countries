import React from 'react';
import countriesJSON from './countries.json';

const CountriesList = () => {
  return <div>{
      {countriesJSON.map((country) => {
return (
    <div key={country.uuid}>
    <Link>
    {country.name}
    </Link>
    </div>
)

      })}
      }</div>;
  
};

export default CountriesList;
