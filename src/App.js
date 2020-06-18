import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

export default function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route path="/contacts" component={CountryDetail} />
      </Switch>
    </div>
  );
}
