import React from 'react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Navbar from './Navbar';
import CountriesList from './countrieslist/CountriesList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CountriesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
