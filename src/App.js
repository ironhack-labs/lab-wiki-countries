// src/App.js
// import { Routes } from "react-router-dom";
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countriesList, setcountriesList] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setcountriesList(response.data);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesList} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countriesList} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default App;
