import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Link, NavLink } from "react-router-dom";
import Details from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries
    };
  }

  showCountries = () => {
    return this.state.countries.map((count, i) => {
      return (
        <div key={i} className="row single-count">
          <Link
            to={`/country/${count.cca3}`}
            className="list-group-item list-group-item-action"
          >
            {count.flag}
            {count.name.common}
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <li>WikiCountries</li>
        </nav>
        <div className="container-fluid">
          <div className="row row-padding">
            <div className="col-5 all-count">{this.showCountries()}</div>
            <Switch>
              <Route exact path="/country/:detail" component={Details} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
