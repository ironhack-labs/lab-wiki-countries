import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Switch>
        <Route exact path="/:ecc3" component={CountryDetails} />
      </Switch>

    </div>
  );
}

export default App;
