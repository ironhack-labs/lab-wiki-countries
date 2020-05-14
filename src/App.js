import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetailsPage from './pages/CountryDetailsPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div id="countriesList">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <CountriesList />
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/"></Route>
                <Route
                  exact
                  path="/country-details/:cca3"
                  component={CountryDetailsPage}
                />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
