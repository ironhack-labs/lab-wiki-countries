import countries from '../countries.json';
import CountryListItem from './CountryListItem';
import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      {countries.map((country) => {
        return <CountryListItem country={country} />;
      })}
    </div>
  );
}

export default CountriesList;
