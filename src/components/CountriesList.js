import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';

const CountriesList = ({ countries }) => {
  return (
    <div className="container d-flex">
      <div className="col-md-5" >
        {countries.map((country) => {
          return (
            <div className="border" key={country.alpha2Code}>
              <Link className="country-list" to={`/${country.alpha3Code}`}>
              <img
                style={{ width: 50 }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="country-flag"
              />
                <h4 className="countries-name text-dark text-uppercase font-italic text-decoration-none">{country.name.common}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="col-md-8 px-5">
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default CountriesList;
