import React from 'react';
import CountriesData from '../countries.json';
import CountryLink from './CountryLink';
import './CountriesList.css';

const CountriesList = () => {
  return (
    <div className="CountriesList overflow-auto col-4">
      <ul className="list-group ">
        {CountriesData.map((country) => {
          return (
            <li className="list-group-item">
              <CountryLink country={country} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
