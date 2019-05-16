import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ countries = [] }) => (
  <div className="col-5 col-5-style">
    <div className="list-group">
      <ul>
        {countries.map(country => (
          <li className="list-group-item list-group-item-action" key={country.cca3}>
            {country.flag}
            <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Countries;
