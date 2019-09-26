import React from "react";
import CountryDetail from "./components/CountryDetail";
import countries from "./countries";
import "./App.css";

import { Route, Link } from "react-router-dom";

function App() {
  const country = countries.map(mappedCountry => {
    // console.log(mappedCountry);
    return (
      <Link
        to={`/countrydetail/${mappedCountry.cca3}`}
        key={mappedCountry.cca3}
      >
        <div className="list-group-item list-group-item-action">
          <span role="img" aria-label="emojiflag">
            {mappedCountry.flag}
          </span>
          <p>{mappedCountry.name.common}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>WikiCountries</h1>
      </header>

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              {country}
            </div>
          </div>
              <Route
                exact
                path="/countrydetail/:id"
                component={CountryDetail}
              />
        </div>
      </div>
    </div>
  );
}

export default App;
