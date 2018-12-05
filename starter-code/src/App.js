import React, { Component } from "react";
import countries from "./countries.json";
import CountryDetail from "./components/CountryDetail";
import { Link, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { countries: countries };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              {this.state.countries.map((elem, i) => (
                <div key={i} className="list-group">
                  <Link
                    className="list-group-item list-group-item-action"
                    to={"/countryDetail/" + elem.cca3}
                  >
                    {elem.flag}
                    {elem.name.common}
                  </Link>
                </div>
              ))}
            </div>
            <Switch>
              <Route
                exact
                path="/countryDetail/:id"
                component={CountryDetail}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
