import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import { Link } from "react-router-dom";
import countries from "./countries.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="row">
        <div class="col-5 list-group">
            {countries.map((country, idx) => {
              return (
                <div  class="list-group-item list-group-item-action" key={idx}>
                  <h3>
                    <Link to={`/countries/${country.cca3}`}>
                      {country.flag} {country.name.official}
                    </Link>
                  </h3>
                </div>
              );
            })}
          </div>

          <div class="col-7">
            <Switch>
              <Route exact path="/countries/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
