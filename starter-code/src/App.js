import React from "react";
import { Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import Countries from "./countries.json";
import CountryDetail from "./component/CountryDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ height: "90vh", overflow: "scroll" }}>
            <div className="list-group listNames">
              {Countries.map(country => {
                return (
                  <Link
                    to={country.cca3}
                    className="list-group-item list-group-item-action"
                  >
                    {country.flag} {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-7">
            <Route exact path="/:countryCode" component={CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
