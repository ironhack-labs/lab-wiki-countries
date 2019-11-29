import React from "react";
import "./App.css";
import countries from "./countries.json";
import { Link, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";

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
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              {countries.map((country, index) => {
                return (
                  <Link
                    key={index}
                    to={`/countries/${country.cca3}`}
                    className="list-group-item list-group-item-action"
                  >
                    {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
          <Route exact path="/countries/:id" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
