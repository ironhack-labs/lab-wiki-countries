import './App.css';
import Countries from './countries.json';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countriesAPI, setCountriesAPI] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        let myCountries = response.data;
        setCountriesAPI(myCountries); /* console.log(response) */
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<CountriesList countries={countriesAPI} />} />
        <Route
          path="/:countriesId"
          element={<CountryDetails countries={countriesAPI} />}
        />
      </Routes>
    </div>
  );
}

export default App;
