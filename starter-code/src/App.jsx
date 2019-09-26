import React from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import CountryView from "./views/Country";
import countries from "./countries";
function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5 scroll">
            <div className="list-group">
              {countries.map(country => (
                <Link
                  key={country.name.common}
                  className="list-group-item list-group-item-action"
                  to={"/country/" + country.cca3}
                >
                  {country.flag}
                  {country.name.common}
                </Link>
              ))}
            </div>
          </div>
          <Switch>
            <Route path="/country/:id" component={CountryView} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
