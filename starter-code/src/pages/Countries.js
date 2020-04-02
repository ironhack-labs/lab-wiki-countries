import React from 'react';
import countries from '../countries.json';
import CountryDetail from '../components/CountryDetail';
import { Link, Route } from 'react-router-dom';
import './Countries.css';

function Countries() {
  return (
    <div className="countries">
    <h4>WikiCountries</h4>
      <ul className="country-list">
        {countries.map(country => (
          <li>
            <Link to={`/countries/country-detail/${country.cca3}`}>
              {country.cca3}
            </Link>
          </li>
        ))}
      </ul>
      <div className="detail-container">
        <Route
          path="/countries/country-detail/:cca3"
          component={CountryDetail}
        />
      </div>
    </div>
  );
}

export default Countries;
