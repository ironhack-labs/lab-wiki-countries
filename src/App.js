import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const getCountries = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    } catch (error) {
      window.alert('Houve um erro');
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const [countries, setCountries] = useState([]);
  console.log(countries);

  return (
    <div className="App">
      <Navbar className="navbar" />
      <div className="container">
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
