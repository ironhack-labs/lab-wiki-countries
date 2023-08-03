import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    setCountries(countriesData);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countriesData} />} />
        <Route path="/:countryCode" element={<CountryDetails countries={countriesData} />} />
      </Routes>
    </div>
  );
}

export default App;
