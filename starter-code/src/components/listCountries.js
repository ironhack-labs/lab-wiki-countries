import React from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json';

const ListCountries = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        {
          countries.map(country => (
          <a className="list-group-item list-group-item-action" href={country.cca3}>{country.flag} {country.name.official}</a>
          ))
        }
      </div>
    </nav>
  );
};

export default ListCountries;
