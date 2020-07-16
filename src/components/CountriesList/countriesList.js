import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json'



function CountriesList() {
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
          <div className="col-5">
            <div className="list-group">
              {countries.map((oneCountry, idx) => (
                <Link
                  key={idx}
                  className="list-group-item list-group-item-action"
                  to={oneCountry.cca3}
                >
                  {oneCountry.flag}
                  {oneCountry.name.common}
                </Link>
              ))}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
