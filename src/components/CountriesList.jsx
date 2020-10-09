import React from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = ({ countries, handleClick }) => {
  return (
    <div className="list-group">
      {countries
        ?.map((c) => ({
          name: c['name']['official'],
          cca2: c['cca2'],
          cca3: c['cca3'],
        }))
        ?.map((c, i) => (
          <NavLink
            key={`${i}-${c.cca3}`}
            className="list-group-item list-group-item-action"
            exact
            to={`/${c.cca3}`}
            onClick={() => handleClick(c.cca3)}
          >
            <img
              src={`https://www.countryflags.io/${c.cca2.toLowerCase()}/flat/64.png`}
              alt={c.name}
              className="img-fluid mr-3 mw-25"
            />
            {c.name}
          </NavLink>
        ))}
    </div>
  );
};
export default CountriesList;
