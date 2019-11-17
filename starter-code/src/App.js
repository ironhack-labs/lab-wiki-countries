import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import countries from "./countries.json";
class App extends React.Component {
  showCountries = () => {
    return countries.map((eachCountry, i) => {
      return (
        <li key={i}>
          <Link
            to={`/country/${eachCountry.cca3}`}
            className="ist-group-item list-group-item-action"
          >
            {eachCountry.flag}
            {eachCountry.name.common}
          </Link>
        </li>
      );
    });
  };
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
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">{this.showCountries()}</div>
            </div>
            <Switch>
              <Route
                exact
                path="/country/:id"
                component={props => (
                  <CountryDetail {...props} countries={countries} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
