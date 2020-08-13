import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
// import queryString from 'query-string';

const CountriesList = (props) => {
  const countriesList = countries.map((eachCountry, index) => {
    return (
      <div key={eachCountry.cca3}>
        <h3>
          <Link to={`/countries/${eachCountry.cca3}`}>
            {eachCountry.name.common}
          </Link>
        </h3>
      </div>
    );
  });

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">{countriesList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
