import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Switch, Link, Route } from "react-router-dom";
import CountryDetail from './components/CountryDetail';

class App extends Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <div className="App">
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
              <div className="list-group">
                {this.state.countries.map(elem => (
                  <Link
                    key={elem.ccn3}
                    className="list-group-item list-group-item-action"
                    to={elem.cca3}
                  >
                    {elem.flag} {elem.name.common}
                  </Link>
                ))}
              </div>
            </div>
            <Switch>
              <Route exact path='/:id' component={CountryDetail}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
