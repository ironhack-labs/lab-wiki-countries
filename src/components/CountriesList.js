import React from 'react';
import countryDetails from '../countries.json';
import './CountriesList.css';
import { NavLink } from 'react-router-dom';

export default function CountriesList() {
  return (
    <div className="col-5 list-group scrool">
      {countryDetails.map((el) => (
        <NavLink
          to={`/${el.cca3}`}
          key={el.cca3}
          className="list-group-item list-group-item-action"
        >
          {el.name.common}
        </NavLink>
      ))}
    </div>
  );
}
