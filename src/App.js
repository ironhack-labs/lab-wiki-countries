import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from './countries.json';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Switch>
            <Route exact path="/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
