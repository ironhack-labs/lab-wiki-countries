import React from "react";
import { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CountryView from "./views/CountryView";

import countries from "./countries.json";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div id="root">
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
                  style={{ maxHeight: "90vh", overflow: "scroll" }}
                >
             
                  <div className="list-group">
                    {countries.map(value => {
                      return (
                        <Link to={`/${value.cca3}`}>{value.flag}{value.name.common}</Link>
                      );
                    })}
                  </div>
                </div>
                <Switch>
          <Route path="/:cca3" component={CountryView} />
        </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
