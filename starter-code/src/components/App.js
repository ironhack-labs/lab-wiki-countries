import React from "react";
import "../App.css";
import { CountryDetail } from "./CountryDetail";
import { List } from "./List";
import Countries from "../countries.json";
import { Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand mb-0">WikiCountries</span>
      </nav>
      <div className="container row">
        <List countries={Countries} />
        <Switch>
          {Countries.map((country, i) => {
            return (
              <Route
                key={i}
                path={`/${country.cca3}`}
                component={() => (
                  <div className="col-7">
                    <CountryDetail country={country} />
                  </div>
                )}
              />
            );
          })}
        </Switch>
      </div>
    </div>
  );
};
