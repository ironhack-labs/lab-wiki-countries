import React from "react";
import CountryDetails from "./components/CountryDetail.js";
import countries from "./countries.json";
import { Link, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>WikiCountries</p>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-5 list-group-item-style">
            {countries.map((country, index) => (
              <div className="list-group-item list-group-item-action">
                <a key={index}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${country.cca3}`}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Route exact path="/:id" component={CountryDetails} />
    </div>
  );
}

export default App;
