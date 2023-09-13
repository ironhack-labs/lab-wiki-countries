import React from 'react';
import { NavLink } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <ul
      className="list-group"
      style={{ maxHeight: '90vh', overflowY: 'scroll' }}
    >
      {countries.map((country) => {
        return (
          <li className="list-group-item" key={country.alpha3Code}>
            <NavLink
              to={country.alpha3Code}
              className="d-flex align-items-center"
            >
              <img
                width={50}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <p className="px-4 my-0">{country.name.common}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CountriesList;
