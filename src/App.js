import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import React, { useState, useEffect } from "react";
import axios from 'axios';
const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {

  const [countries, setCountriesList] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setCountriesList(response.data);
      // setFetching(false);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:countryCode"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
