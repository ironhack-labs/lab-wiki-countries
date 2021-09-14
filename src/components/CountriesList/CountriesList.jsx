import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList({ countries }) {
  return (
    <div className="CountriesList">
      <ul>
        {countries.map((country) => (
          <li className="list" key={country.alpha3Code}>
            <Link to={`/countries/${country.alpha3Code}`} className="list-list">
              <img src={country.flag} height={16} alt={country.name} />{' '}
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
