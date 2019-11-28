import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import CountryDetail from "./CountryDetail";
import Navbar from "./Navbar";

import countries from "./countries.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div
              className="list-group"
              style={{
                textAlign: "start",
                overflow: "scroll",
                height: "80vh"
              }}
            >
              {countries.map(country => {
                return (
                  <Link
                    className="list-group-item list-group-item-action"
                    to={`/${country.cca3}`}
                    key={country.cca3}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
          <Route exact path="/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
