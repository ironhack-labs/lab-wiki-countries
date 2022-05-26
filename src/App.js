import './App.css';

import React, { useState } from 'react';
import countriesData from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div className="appBody">
        <div className="countryList">
          <CountriesList countries={countries} />
        </div>

        <div className="countryDetails">
          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
