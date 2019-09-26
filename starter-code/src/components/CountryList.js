import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryList = () => {
  return (
    <div>
      <div className="list-group">
        {countries.map(eachCountry => {
          return (
            <Link to={`/CountryDetail/${eachCountry.cca3}`}>
              <p className="list-group-item list-group-item-action active">
                {eachCountry.flag} {eachCountry.name.common}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
