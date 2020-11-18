import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <ul className="list-group">
        {countries.map((country, i) => (
          <li key={i}>
            <Link
              class="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              <img
                src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                className="img-fluid"
                alt="flag"
              />{' '}
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
