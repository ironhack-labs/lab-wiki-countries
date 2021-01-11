import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

import { Route } from 'react-router-dom';

import countries from './countries';

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">
          <Route path='/wiki-countries' render={() => <CountriesList myCountries={countries} />}></Route>
          <Route path='/wiki-countries/:theID' component={CountryDetails}></Route>
        </div>
      </div>
    </div>
  );
}

export default App;
