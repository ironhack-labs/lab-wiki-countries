import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country, index) => (
          <NavLink
            to={`/${country.cca3}`}
            className="list-group-item list-group-item-action"
            activeClassName="active"
            key={index}
          >
            {country.flag} {country.name.common}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
