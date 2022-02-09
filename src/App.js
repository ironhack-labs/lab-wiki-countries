import './App.css';
import Router from './Router'
import countries from './countries.json';
import React, { useEffect, useState } from 'react';
import {Navbar, CountriesList, CountryDetails } from './components';

const axios = require('axios')

function App() {

  return (
    <div className="App">
      < Navbar />
      < CountriesList />
      < CountryDetails />


    </div>
  );
}

export default App;
