import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

import { Route, Link, Switch } from 'react-router-dom';

import countries from './countries';

function App() {
  return (
    <div className="App">

      <Navbar />
        <Route path='/wiki-countries' render={() => <CountriesList myCountries={countries} />}></Route>
        <Route path='/wiki-countries/:theID' component={CountryDetails}></Route>

    </div>
  );
}

export default App;
