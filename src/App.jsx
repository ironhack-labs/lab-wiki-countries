import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetail from './views/CountryDetail';

import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CountriesList countries={countries} />

        <Route path="/country/:countryCode" component={CountryDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;