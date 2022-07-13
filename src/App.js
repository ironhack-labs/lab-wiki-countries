import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails'
import { useState, useEffect } from "react";



function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/:id" element={<CountryDetails detailsCountriesJSON={countries} />} />
      </Routes>

      <Navbar />
      <CountriesList countriesJSON={countries} />

    </div>

  )
}
export default App;
