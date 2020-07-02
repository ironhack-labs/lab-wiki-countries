// For images countries[i].tld[0] gives the externson for flag but have to remove '.'
import React, { Component } from 'react';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="layout">
          <CountriesList />
          <Switch>
            {/* the props below reference the objects that "Route" makes you can inspect
            it by using console.log(prop) in countrydetail.js */}
            <Route
              exact
              path="/:id"
              render={(props) => <CountryDetail {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
