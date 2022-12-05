import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';

const apiCountries = 'https://ih-countries-api.herokuapp.com/countries'


function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
    .get(apiCountries)
    .then((e) => {
      setCountries(e.data)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <div className='row'>
          <CountriesList countries = {countries} />
          
          <Routes>
            <Route path='/:countryAlpha2Code' element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
