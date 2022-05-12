
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from "./countries.json"


function App() {
  return(
<div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />

      

    </div>
  </div>
</div>


  ) 
}
export default App;
