// src/App.js
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import countriesFromJson from "./countries.json";
import { useEffect } from 'react';
import axios from 'axios';


function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((allCountries) => {
        setCountries(allCountries.data)
      })
      .catch((err)=>console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails/>} />
      </Routes>
    </div>
  );
}
export default App;
