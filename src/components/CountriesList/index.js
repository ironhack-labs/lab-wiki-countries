import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

function CountriesList({ countries }) {
  return (
    <div className="col-5 col5">
      <div className="list-group">
        {countries.map((country) => (
          <div key={country.alpha3Code}>
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              {' '}
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <span>{country.name.common}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

  