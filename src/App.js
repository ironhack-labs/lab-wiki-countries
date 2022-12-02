import { useState } from "react"
import React from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css';
import allCountries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(allCountries)


  return (
    <div className="App">

      <NavBar />

      <CountriesList countries={countries} />
      <Routes>
      <Route path="/:alpha3Code" element={ <CountryDetails CountriesList={CountriesList} /> } />
      </Routes>

    </div>
  );
}

export default App;
