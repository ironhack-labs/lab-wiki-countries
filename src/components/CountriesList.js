import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action text-left"
              to={`/${country.alpha3Code}`}
              key={country.alpha3Code}
            >
              <img
                className="country-flag"
                src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`}
                alt=""
              />
              {country.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
