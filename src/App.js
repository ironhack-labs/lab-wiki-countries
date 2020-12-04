import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDeatails';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
    </div>
  );
}

export default App;
