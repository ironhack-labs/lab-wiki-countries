import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import CountriesList from '../src/components/CountriesList';
import CountryDetails from '../src/components/CountryDetails';

import countries from './countries.json';

import { Route, Switch } from 'react-router-dom';

function App() {
  // console.log(countries);

  return (
    <div className="App">
      <Navbar />
      <div className="app-wrapper">
        <CountriesList countries={countries} />
        <Switch>
          <Route exact path="/:id" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
