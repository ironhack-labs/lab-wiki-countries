import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CountriesList countries={countriesData} />
          </div>
          <div className="col-md-8">
            <Routes>
              <Route path="/:alpha3Code" element={<CountryDetails countries={countriesData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
