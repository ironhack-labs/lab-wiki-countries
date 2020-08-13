import React from 'react';
import './App.css';
import countriesListFromJSON from './countries.json';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
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
          <CountriesList countriesList={countriesListFromJSON} />

          <Switch>
            <Route
              exact
              path="/:countryCode"
              render={(props) => {
                return (
                  <CountryDetail
                    {...props}
                    countriesList={countriesListFromJSON}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
