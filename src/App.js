import './App.css';
import Navbar from '../src/components/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CountriesList from './components/CountriesList.js';
import countriesJson from './countries.json';
import CountryDetails from './components/CountryDetails.js';

function App() {
  const [countries, setCountries] = useState(countriesJson);


  return (
    <div className="App">
    <Navbar></Navbar>
    <div className='countryDetailsContainer'>
      <CountriesList countries={countries}></CountriesList>
      <Routes>
        <Route path="/countryDetails/:alpha3Code" element={<CountryDetails countries={countries}/>} />
      </Routes>
    </div>

    </div>
  );
}

export default App;
