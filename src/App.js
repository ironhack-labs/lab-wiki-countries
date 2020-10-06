import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountryDetails />
      <CountriesList />
    </div>
  );
}

export default App;
