import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail";
import countries from "./countries.json";

function App() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight:" 90vh", overflow: "scroll"}}>
            <div className="list-group">
              {countries.map(country => {
                return (
                  <Link
                    className="list-group-item list-group-item-action active"
                    to={`/${country.cca3}`}
                  >
                    {country.flag} {country.name.official}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-5">
          <Route exact path="/:id" component={CountryDetail} />
          <Route exact path='/'/>
            </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
