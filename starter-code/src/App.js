import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import countries from "./countries.json";
import CountryDetails from "./CountryDetails";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {countries.map((el, i) => (
                  <Link to={el.cca3} className="list-group-item list-group-item-action" key={i}>
                    {el.flag} {el.name.common}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/:code" render={routeProps => <CountryDetails {...routeProps} countries={countries} />}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
