import React, { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import countriesData from './countries.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';
import Greeting from './components/Greeting.js';
import About from './components/About.js';

function App() {
  const [countries, setCountries] = useState(countriesData);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <div className="App bg-gray-200 h-screen">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/countries"
            element={<CountriesList countries={countries} />}
          />
          <Route
            path="/country-details/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
