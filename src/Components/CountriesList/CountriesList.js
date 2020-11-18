import React from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country, i) => (
          <Link
            to={`/${country.cca3}`}
            key={i}
            className="list-group-item list-group-item-action"
          >
            {country.flag} {``} {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
