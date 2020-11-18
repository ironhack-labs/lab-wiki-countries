import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import countries from '../../countries.json';
import './CountriesList.css';

function CountriesList() {
  // const [state, setState] = useState('');

  const handleClick = (event) => {
    return event.currentTarget.classList.value + ` active`;
  };

  return (
    <div className="col-4 countrieslist">
      <ul className="list-group">
        {countries.map((country, i) => (
          <li key={i}>
            <Link
              className={'list-group-item list-group-item-action'}
              to={`/countries/${country.cca3}`}
              onClick={handleClick}
            >
              <strong>{country.flag}</strong> {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
