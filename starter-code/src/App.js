import React, { Component } from "react";
import "./App.css";
import CountryDetails from "./components/CountryDetails";
import data from "./countries.json";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: data
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wikicountries</h1>
        </header>
        <section className="big-container">
          <div className="list-group">
            {this.state.countries.map((country, key) => (
              <Link
                key={key}
                to={`/${country.cca3}`}
                className="list-group-item list-group-item-action"
              >
                {country.name.common}
              </Link>
            ))}
          </div>
          <Switch>
            {this.state.countries.map((country, key) => (
              <Route
                key={key}
                path={`/${country.cca3}`}
                render={() => <CountryDetails country={country} />}
              />
            ))}
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
