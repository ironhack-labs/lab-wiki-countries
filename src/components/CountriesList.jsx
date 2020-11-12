import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './CountriesList.css';

// Import Data Base
import countries from '../countries.json';

const CountriesList = () => {
  return (
    <div>
      {countries.map((country, index) => {
        return (
          <div className="col-5 countries_list" key={country.cca3}>
            <div className="list-group">
              <h5 className="list-group-item list-group-item-action">
                <Link to={`/${country.cca3}`}>{country.name.common}</Link>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
