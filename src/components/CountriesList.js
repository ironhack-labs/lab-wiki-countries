import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <ul className="list-group">
        {countries.map((country, i) => (
          <li key={i} class="list-group-item list-group-item-action">
            <img src={country.flag} />
            <Link to={`/${country.name.common}`}> {country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
