import React from 'react';
import { Link } from 'react-router-dom';
import countriesDataJSON from '../countries.json';

const CountriesList = () => {
  return (
    <div className="container">
      {countriesDataJSON.map((country) => {
        return (
          <div className="row">
            <div className="list-group" key={country.cca3}>
              <div
                className="col-5"
                style={{ maxHeight: '90vh', overflow: 'scroll' }}
              >
                <div className="list-group">
                  <Link
                    className="list-group-item list-group-item-action"
                    to={'/' + country.cca3}
                  >
                    <p>{country.name.common}</p>
                  </Link>

                  <span>{country.flag}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
