import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
// import CountryDetails from './components/CountryDetails';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <NavBar />

      <Routes>
        <Route path="/" element={<CountriesList />}/>
        <Route path="/:countryId" element={<CountryDetails />}/>
      </Routes>

      {/* <CountryDetails /> */}
      
    </div>
  );
}

export default App;
