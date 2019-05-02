import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail";
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    countries: countries
  };

  render() {
    const countries = this.state.countries;
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary">
          <span className="navbar-brand">WikiCountries</span>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <ul className="list-group scrollable">
                {countries.map(country => {
                  return (
                    <li key={country.cca3} className="list-group-item list-group-item-action">
                      <Link to={`/${country.cca3}`}>
                        {country.flag} {country.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/:id" component={CountryDetail}/>
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
