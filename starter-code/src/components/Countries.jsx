import React from "react";
import CountryDetail from "./CountryDetail";

import { Link } from "react-router-dom";

const Countries = props => {
  return (
    <div>
      {props.countries.map((eachCountry, index) => {
        return (
          <Link to={`/countries/${eachCountry.cca3}`}>
            <div key={eachCountry.ccn3}>
              <p>{eachCountry.name.official}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
