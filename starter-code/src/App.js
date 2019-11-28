import React from "react";
// import logo from "./logo.svg";
import { Link, Route } from "react-router-dom";
import "./App.css";
import { CountryDetail } from "./CountryDetail";
import CountryArray from "./countries.json";

const countryList = CountryArray;

function App() {
  return (
    <div id="root">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {countryList.map((country, index) => {
                  return (
                    <Link
                      key={index}
                      className="list-group-item list-group-item-action"
                      to={`/country/${country.cca3}`}
                    >
                      {country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-5">
              <Route exact path="/country/:id" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
