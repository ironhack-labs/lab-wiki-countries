import React, { Component }  from 'react';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { getCountries } from './services/CountryService';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then(countries => {
        setCountries(countries);
      });
  }, []);

  const countriesSort = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="App d-flex flex-row">
      <div>
        <div className='fixed-top mb-5'>
          <Navbar />
        </div>
      </div>
      <div className='lista'>
          <CountriesList countries={countriesSort} />
        </div>
      <div className='detalle'>
        <Routes >
          <Route path="/:alpha3Code" element={<CountryDetails countries={countriesSort} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;