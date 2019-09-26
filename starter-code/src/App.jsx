import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import CountryDetail from "./components/CountryDetail";
import Navbar from "./components/Navbar";
import countries from "./countries.json";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="list col-5  overflow-auto">
              {countries.map(country => (
                <div key={country.cca3} className="country-box">
                  <Link className="link" to={`/country/${country.cca3}`}>
                    <span className="flag">{country.flag}</span>
                    {country.name.common}
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-7 detail">
              <Switch>
                <Route exact path="/country/:cca3" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
