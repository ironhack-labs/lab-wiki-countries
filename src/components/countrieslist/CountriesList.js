import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './CountriesList.css';

function CountriesList(props) {
  const [state, setState] = useState({ activeItem: -1 });

  const handleClick = (index) => {
    setState({ activeItem: index });
  };

  return (
    <div className="col-4 countrieslist">
      <ul className="list-group">
        {props.countries.map((country, i) => (
          <li key={i}>
            <Link
              className={
                state.activeItem === i
                  ? 'list-group-item list-group-item-action border-primary font-weight-bold active'
                  : 'list-group-item list-group-item-action border-primary font-weight-bold text-primary'
              }
              to={`/countries/${country.cca3}`}
              onClick={handleClick.bind(this, i)}
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
