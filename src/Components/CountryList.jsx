import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
//import CountryDetails from './CountryDetails'

const CountryList = () => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90 vh', overflow: 'scroll' }}>
          <div className="list-group">
            {countries.map((country) => (
              <div key={country.cca3}>
                <Link className="list-group-item list-group-item-action"
                  exact to={`/${country.cca3}`}>
                  {country.flag} {country.name.common}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryList;
