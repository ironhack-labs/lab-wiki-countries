import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => (
          <Link
            to={`/${country.cca3}`}
            key={country.cca3}
            className="list-group-item list-group-item-action"
            style={{
              textAlign: 'left',
            }}
          >
            <img
              src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
              alt={`Flag of ${country.name.common}`}
            />{' '}
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
