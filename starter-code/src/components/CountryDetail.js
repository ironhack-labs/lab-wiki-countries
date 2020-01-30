import React from 'react';
import { Link } from "react-router-dom";

const CountryDetails = ({ countries }) =>
  <div className="list-group">
    {countries.length && (
      countries.map((country, index) => {
        return (
          <Link
            className="list-group-item text-left" 
            key={index}
            to={`/${country.cca3}`}>
              <span className="mr-2">{country.flag}</span>
              {country.name.common}
          </Link>
        )
      })
    )}              
  </div>

export default CountryDetails