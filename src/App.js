import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Switch, Route } from 'react-router-dom';

import countriesInputList from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5 countries-container overflow-scroll" style= {{height: "800px"}}>
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