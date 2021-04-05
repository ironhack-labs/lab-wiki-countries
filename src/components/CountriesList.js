import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

const CountriesList = ({ countries }) => {
  return (
    <div className="list-group list-group-scroll">
      {countries.map((country) => {
        return (
          <Link
            to={`/${country.alpha3Code}`}
            key={country.alpha3Code}
            className="list-group-item list-group-item-action text-left"
          >
            <img
              src={country.flag}
              height="15rem"
              alt={country.name}
              className="mr-2"
            />
            {country.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
