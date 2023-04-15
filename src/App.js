// src/App.js

import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const CountryDetailsWithParams = () => {
    const { countryCode } = useParams();
    const country = countries.find(
      (country) => country.alpha3Code === countryCode
    );
    return <CountryDetails country={country} />;
  };

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-5">
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/:countryCode" element={<CountryDetailsWithParams />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
