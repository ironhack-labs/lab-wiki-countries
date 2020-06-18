import React from 'react';
import './App.css';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/" component={CountryDetail} />
            <Route path="/:countryCode" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
