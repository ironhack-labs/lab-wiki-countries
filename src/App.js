// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import countries from "./countries.json"


function App() {

  const [countriesList, setCountriesList] = useState(countries);
  
  return (
    <div className="App">

      <Navbar />
      <div className="container">
      <CountriesList countriesList={countriesList} />
      <Routes>
        <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
      </Routes>
      </div> 

    </div>
  );
}
export default App;
