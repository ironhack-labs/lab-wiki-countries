import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
  const displayAll = () => {
    return countries.map((country, id) => {
      return (
        <div className="col-md-12" key={id}>
          <Link
            to={`/countrydetails/${country.cca3}`}
            className="list-group-item list-group-item-action"
          >
            {country.flag} {country.name.common}
          </Link>
        </div>
      );
    });
  };

  return <div className="col-5 list-group">{displayAll()}</div>;
};

export default CountriesList;
