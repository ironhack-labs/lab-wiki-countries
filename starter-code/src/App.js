import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail.jsx";
import countries from "./countries";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              WikiCountries
            </NavLink>
          </div>
        </nav>
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              {countries.map((country, i) => (
                <NavLink
                  key={i}
                  to={"/" + country.cca3}
                  className="list-group-item list-group-item-action"
                >
                  {country.flag}
                  {country.name.common}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-7">
            <Route path="/:cca3" component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
