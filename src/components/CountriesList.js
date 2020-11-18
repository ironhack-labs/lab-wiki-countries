import React from 'react';
import Countrie from './Countrie';
import CountriesDB from '../countries.json';
import './CountriesList.css';

function CountriesList() {
  return (
    <div className="col-5 CountrieList">
      {CountriesDB.map((elem, i) => (
        <Countrie
          key={i}
          name={elem.name.common}
          to={`/${elem.cca3}`}
          flag={elem.flag}
        />
      ))}
    </div>
  );
}

export default CountriesList;
