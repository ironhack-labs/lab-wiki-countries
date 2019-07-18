import React from "react";
import { NavLink, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import countries from "../countries.json";

export default function Countries() {
  return (
    <div className="row">
      <div className="col-6 mh-75-overflow-auto">
        <div className="list-group">
          {countries.map(country => (
            <NavLink
              className="list-group-item list-group-item-action"
              key={country.cca3}
              to={`/${country.cca3}`}
            >
              {country.flag}|{country.name.official}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="col-4">
        <Route exact path="/:cca3" component={CountryDetail} />
      </div>
    </div>
  );
}
