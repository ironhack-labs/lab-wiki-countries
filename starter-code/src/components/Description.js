import React from "react";
import countries from "../countries.json";
import { Route, NavLink } from "react-router-dom";
import countryDetails from "./CountryDetails.js";

function Description() {
  return (
    <div className="row">
      <div className="col-5 mh-75-overflow-auto">
        <div className="list-group">
          {countries.map(country => (
            <NavLink
              key={country.cca3}
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              {country.flag} {country.name.common}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-7">
        <Route exact path="/:cca3" component={countryDetails} />
      </div>
    </div>
  );
}

export default Description;
