import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((countryObj) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${countryObj.alpha3Code}`}
              key={countryObj.alpha3Code}
            >
              <img src={countryObj.flag} /> {countryObj.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;