import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = (props) => {
  return (
    <div className="col-4" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
      <div className='list-group'>
        {countries.map((country) => {
          return (
            <Link
              key={country.cca3}
              to={`/${country.cca3}`}
              className="list-group-item list-group-item-action"
            >
              {country.flag}
              {country.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;