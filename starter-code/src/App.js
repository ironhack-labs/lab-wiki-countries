import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CountryDetails from "./CountryDetails";
import countries from "./countries.json";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>WikiCountries</h1>
        </Link>
      </nav>
      <div className="Content">
        <div className="Countries">
          {countries.map(country => {
            return (
              <div className="Country" key={country.cca3}>
                <Link to={`/country/${country.cca3}`}>
                  <img
                    src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                    alt={country.name.common}
                  />
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Switch>
            <Route path="/country/:cca3" component={CountryDetails}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
