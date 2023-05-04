import './App.css';
import countriesData from "./countries.json"
import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState(countriesData)

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        setCountries(response.data)
      })
}, [])

  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries}/>

      <Routes>
        <Route path='/country/:alpha3Code'
               element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
