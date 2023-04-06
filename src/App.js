
import { useEffect, useState } from 'react';
import './App.css';
import countries from "./countries.json"
import Navbar from './components/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {

 

  useEffect(() => {
    console.log(countries)
  }, [])

 

  return (
    <div className="App">
    <Navbar />
    <CountriesList />
    <Routes>
      <Route path='/countries/:alpha3Code' element={<CountryDetails />} />
  
    </Routes>
    </div>
  );
}

export default App;
