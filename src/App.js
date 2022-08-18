import logo from './logo.svg';
import './App.css';
import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetailsPage from './components/CountryDetails';
import { useState, useEffect } from 'react';
import countriesData from './countries.json';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
function App() {
  const [countries, setCountries] = useState(countriesData);

  useEffect(() => {
    setCountries(countries);
  }, []);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
    <Navbar/>
 
    
      <Routes>
      <Route path="/countries" element={<CountriesList countries={countries} />} />
      <Route path="/countries/:countriesId" element={<CountryDetailsPage countriesId={countries._id} />} />
      </Routes>
    </div>
   
  );
}

export default App;
