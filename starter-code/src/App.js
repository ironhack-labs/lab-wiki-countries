import React, { Component } from "react";
import countries from "./countries.json";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail.js";
import Home from "./components/Home";

class App extends Component {
  state = { countries: countries };

  render() {
    const countries = this.state.countries;
    return (
      <div>
        <div className="navbar">
          <h2>WikiCountries</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div
              className="col-5 list-group overflow-auto"
              style={{ height: 800 }}
            >
              {countries.map((el, index) => (
                <Link
                  to={`/countries/${el.cca3}`}
                  className="list-group-item list-group-item-action"
                  key={index}
                >
                  {el.flag}
                  {el.name.common}
                </Link>
              ))}
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/countries/:cca3"
                  component={CountryDetail}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
