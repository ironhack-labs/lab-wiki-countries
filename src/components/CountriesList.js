import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  if (countries) {
    return (
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
              key={country.alpha3Code}
            >
              {country.name}
            </Link>
          );
        })}
      </div>
    );
  }
};

export default CountriesList;
