//import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from 'react-router-dom';
import React from 'react';

const CountriesList = () => {
  const countries = Countries;
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overFlow: 'scroll' }}>
      {countries.map((eachCountry) => {
        const countryFlag = eachCountry.cca2.toLowerCase();
        return (
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={`/${eachCountry.cca3}`}
            >
              <img
                src={`https://www.countryflags.io/${countryFlag}/flat/32.png`}
                alt=""
              />
              {eachCountry.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
