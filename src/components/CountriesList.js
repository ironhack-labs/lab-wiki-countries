import React from 'react';
import countriesData from '../countries.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {

  return (
    <div className="container">

      <div className="row">

        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
          <div className="list-group">
            {countries.map((country) => {
              return (
                <Link className="list-group-item list-group-item-action" key={country.alpha3Code} to={`/${country.alpha3Code}`}>{country.name.common}</Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>

  );
};

export default CountriesList;