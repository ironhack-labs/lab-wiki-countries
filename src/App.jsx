import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get(" https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />

        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
