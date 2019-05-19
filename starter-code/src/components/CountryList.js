import React from "react";
import Countries from "../countries.json";
import {Link} from "react-router-dom";

const CountryList = () => (
  <div className="country-list">
    <div className="list-group">
      {Countries.map((country, index) => (
        <div key={index}>
          <Link to={`/:${country.cca3}`} className="list-group-item list-group-item-action">
            <img src={country.flag} alt={country.cioc} /> {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default CountryList;
