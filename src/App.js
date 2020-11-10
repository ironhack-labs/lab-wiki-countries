import React from 'react';
import './App.css';

import countries from './countries.json';

import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList countries={countries} />

      <Switch>
          <Route exact path='/detail/:country' component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
