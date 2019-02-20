import React, { Component } from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import CountriesInfo from "./countries.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand">Wikicountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "100vh", overflow: "scroll" }}>
            <div className="list-group">
              {CountriesInfo.map((country, index) => {
                return (

                      <Link  className="list-group-item list-group-item-action" key={country.cca3} to={`/countries/${country.cca3}`}>{country.flag}{country.name.official}</Link>

                );
              })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/countries/:id" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
