import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesList = ({ countriesData }) => {
  const linkCountry = countriesData.map((countries) => (
    <Link
      to={`/${countries.alpha3Code}`}
      className="list-group-item list-group-item-action"
      key={countries.name.official}
    >
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`}
        alt="flag"
      ></img>{' '}
      {countries.name.common}
    </Link>
  ));

  return (
        <div
          className="col-5"
          style={{ maxheight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">{linkCountry}</div>
          {/* <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countriesData={countriesData} />}
            />
          </Routes> */}
        </div>
  );
};

export default CountriesList;
