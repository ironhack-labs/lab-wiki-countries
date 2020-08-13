//For the general layout
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
  return (
    <div style={{ width: '50%' }}>
      <div className="container">
        <div className="row">
          <div style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            {countries.map((eachCountry, index) => {
              return (
                <div className="list-group" key={index}>
                  <Link
                    className="list-group-item list-group-item-action"
                    to={`/country/${eachCountry.cca3}`}
                  >
                    <img
                      style={{ width: '25px', marginRight: '.5em' }}
                      src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`}
                    />
                    {eachCountry.name.official}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
