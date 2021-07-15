import React from 'react';
import data from './countries.json';

const Countries = () => {
  return (
    <div>
      <h1>Here is the list of countries</h1>
      {data.map((country) => {
        return (
          <div key={country.id}>
            <p>{country.name.official}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
