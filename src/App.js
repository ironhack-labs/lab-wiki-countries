import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [countriesAPI, setCountriesAPI] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        let countriesData = response.data;
        setCountriesAPI(countriesData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route
            path="/:id"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
