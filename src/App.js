import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CountryDetails from './components/CoutryDetails/CountryDetails';
import CountriesList from './components/CountriesList/CountriesList';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-container">
        <div className="countries-list-left">
          <CountriesList countries={countries} />
        </div>
        <div className="country-details-right">
          <Switch>
            <Route
              path="/list/:countryCode"
              render={(props) => (
                <CountryDetails countries={countries} {...props} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
