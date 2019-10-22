import React from "react";
import { Link } from "react-router-dom";
import countries from '../countries.json';

const ListCountries = () => {
  return (
      <div className="container list-group ">
        {
          countries.map((country,idx) => (
            <Link  className = "list-group-item text-left w-100" to={`${country.cca3}`} key={idx}>{country.flag} {country.name.official}</Link>
          ))
        }
      </div>
  );
};

export default ListCountries;
