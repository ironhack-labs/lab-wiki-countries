import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries.json";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./Modules/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
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
              <div
                className="col-5"
                style={{ overflow: "scroll", maxHeight: "90vh", border: "red" }}
              >
                <div className="list-group">
                  {countries.map((current, index) => {
                    return (
                      <Link
                        className="list-group-item list-group-item-action"
                        key={index}
                        to={`/flag/${current.cca3}`}
                      >
                        {current.flag}
                        {current.name.common}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Switch>
                <Route exact path="/flag/:id" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
