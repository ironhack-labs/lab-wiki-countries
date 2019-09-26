import React from "react";

import { Route, Switch } from "react-router-dom";

import "./App.css";

import { Link } from "react-router-dom";

import CountryDetail from "./views/CountryDetail";

import countries from "./countries";

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-success text-white">
        <h1>WikiCountries!!</h1>
      </nav>
      <div className="row">
        <div className="col5">
          <div className="list-group ml-5">
            {countries.map(item => (
              <Link
                className="list-group-item list-group-item-action d-flex"
                to={`/countries/${item.cca3}`}
                key={item.cca3}
              >
                {item.flag} {item.name.common}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-7">
          <Switch>
            {/* <Route exact path="/" /> */}
            <Route exact path="/countries/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
