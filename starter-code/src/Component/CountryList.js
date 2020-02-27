import React from "react";
import { Link } from "react-router-dom";
import countries from "./../countries.json";



const CountryDetail = () => {


  return (
    <div>
      {countries.map(country => {
        return (
          <div key={country.cca3}>
            <Link to={`/${country.cca3}`}>
              <h4>{country.name.common}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default CountryDetail;
