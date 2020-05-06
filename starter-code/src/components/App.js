import React, { Component } from "react";
import "./App.css";
import CountryDetails from "./pages/CountryDetails";
import Countries from "../countries.json";
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.copyCountries = [...Countries];
    this.state = { countries: this.copyCountries };
  }

  render() {
    return (
      <>
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
              <ul className="list-group">
                {this.state.countries.map((elm, idx) => (
                  <Link className="list-group-item list-group-item-action" key={idx} to={elm.cca3}>
                    {elm.flag + elm.name.common}
                  </Link>
                ))}
              </ul>
            </div>

            <Switch>
              <Route path="/:cca3" render={(props) => <CountryDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
