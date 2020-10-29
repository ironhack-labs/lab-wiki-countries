/*
 * App.
 */

import React from 'react';
import { Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import MyNavbar from './components/MyNavbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="myCountries">
        <CountriesList />
        <Route path="/:countryCode" component={CountryDetails} />
      </div>
    </div>
  );
}

export default App;
