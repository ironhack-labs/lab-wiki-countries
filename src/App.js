import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"


function App() {
  return (
    <div>
      <Nav/>
      <CountriesList/>
    </div> 
  );
}

export default App;
