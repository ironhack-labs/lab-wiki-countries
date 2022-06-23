import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountriesList = ({ countriesData }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countriesData.map((country, i) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              key={country.name.common}
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />{' '}
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
