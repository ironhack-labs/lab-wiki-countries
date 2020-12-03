import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import CountriesList from '../src/components/CountriesList';
import CountryDetails from '../src/components/CountryDetails';

import countries from './countries.json';

import { Route, Link, Switch } from 'react-router-dom';

function App() {
  // console.log(countries);
  // const countriesList = countries.map((countries) => {
  //   console.log('---------', countries);
  // });
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Switch>
        <Route exact path="/:id" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
