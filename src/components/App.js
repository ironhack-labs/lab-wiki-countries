import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import countries from '../countries.json';
import HomePage from './homepage/HomePage';
import Navbar from './Navbar';
import CountriesList from './countrieslist/CountriesList';
import CountryDetails from './countrydetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <CountriesList countries={countries} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/countries/:country" component={CountryDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
