import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              key={country.cca3}
              to={`/${country.cca3}`}
              className="list-group-item list-group-item-action"
            >
              {' '}
              {`${country.flag} ${country.name.common}`}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
