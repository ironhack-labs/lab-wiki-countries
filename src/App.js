import React from 'react';
import './App.css';
import countries from '../src/countries.json'
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Switch>
        <Route path="/:cca3" render={(props) => (
          <CountryDetails {...props} countries={countries} />)} />;
         </Switch>
    </div>
  );
}

export default App;
