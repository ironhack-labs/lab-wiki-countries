import React from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./components/CountryDetail";

import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5">
            {countries.map((eachCountries, index) => {
              return (
                <div className="list-group">
                  <Link
                    key={index}
                    className="list-group-item list-group-item-action"
                    to={`/CountryDetail/${eachCountries.cca3}`}
                  >
                    {eachCountries.name.common}
                    {eachCountries.flag}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="col-md-5">
            <Route exact path="/CountryDetail/:id" component={CountryDetail} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
