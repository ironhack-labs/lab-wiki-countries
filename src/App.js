import './App.css';
import React from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      

      <Routes>
        <Route path="/" element={ <CountriesList /> } />
        <Route path="/:countryId" element={ <CountryDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
