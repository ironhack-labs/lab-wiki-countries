import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default class App extends React.Component {
  state = {
    countries: countries
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="row">
          <div className="col-5 sidebar">
            <div className="list-group">
              {this.state.countries.map((country, idx) => (
                <Link
                  className="list-group-item list-group-item-action"
                  key={country.cca3}
                  to={"/" + country.cca3}
                >
                  {country.flag + country.name.common}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-7 text-left pt-3">
            <Switch>
              <Route
                path="/:cca3"
                render={props => {
                  let foundedCountries = this.state.countries.filter(
                    country => country.cca3 === props.match.params.cca3
                  );
                  return (
                    <CountryDetail countries={foundedCountries}></CountryDetail>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
