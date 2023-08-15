import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="container mt-4">
      <h2>Countries List</h2>
      <ul className="list-group">
        {countries.map((country) => (
          <li className="list-group-item" key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
