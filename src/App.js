import './App.css';
import './components/CountryDetails/CountryDetails.css';
import React from 'react';

import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import { Switch, Route } from 'react-router-dom';

import countriesInputList from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 countries-container">
            <CountriesList countries={countriesInputList} />
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/:countryId" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
