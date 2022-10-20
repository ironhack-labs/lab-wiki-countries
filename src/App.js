import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./countries.json"
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';


function App() {
  return <div className="App">


    <Navbar />
    <Routes>
      <Route path="/" element={<CountriesList />} />

      <Route path="/:id" element={<CountryDetails />
      } />


    </Routes>


  </div>



}

export default App;
