import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link className="list-group-item list-group-item-action">
              <p>{country.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
