import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryDetail from "./views/CountryDetail";
import countries from "./countries";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="navbar navbar-dark bg-primary mb-3">WikiCountries</h1>
        <div className="row">
          <div
            className="col-5"
            style={({ maxheight: "90vh" }, { overflow: "scroll" })}
          >
            <div className="list-group">
              {countries.map(country => (
                <div className="list-group-item list-group-item-action">
                  <img
                    src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                    alt="flag"
                  />
                  <Link to={`/country/${country.cca3}`} key={country.cca3}>
                    {country.name.common}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/country/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
