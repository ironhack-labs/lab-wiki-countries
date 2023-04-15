import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country, index) => (
          <Link
            to={`/${country.alpha3Code}`}
            key={index}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            />
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
