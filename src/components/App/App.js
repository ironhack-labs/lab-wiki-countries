import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from '../../countries.json';

import Navbar from '../Navbar/Navbar';
import CountriesList from '../CountriesList/CountriesList';
import CountryDetails from '../CountryDetails/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList path="/" countries={countries} />
          <Route exact path="/:country" component={CountryDetails} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
