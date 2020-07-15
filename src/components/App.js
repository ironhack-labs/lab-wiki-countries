import React from 'react';
import './App.css';
import CountriesList from './Countries/CountriesList'
import CountryDetails from './Countries/CountryDetails'

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CountriesList />
    </div>
  );
}

export default App;
