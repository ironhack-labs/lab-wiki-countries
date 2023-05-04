import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import countriesData from './countries.json';
import axios from 'axios';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      //.get('https://ih-countries-api.herokuapp.com/countries')
      .get(' https://restcountries.com/v2/all ')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />

            <Routes>
              <Route
                path="/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
