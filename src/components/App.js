import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Navbar from './Navbar';
import CountriesList from './countrieslist/CountriesList';
import CountryDetails from './countrydetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <CountriesList />
          <Route path="/countries/:country" component={CountryDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
