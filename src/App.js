import React, { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import countriesData from './countries.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className="container">
          <div className="row">
            <Routes>
              <Route
                path="/"
                element={<CountriesList countries={countries} />}
              />
              <Route
                path="/country/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
