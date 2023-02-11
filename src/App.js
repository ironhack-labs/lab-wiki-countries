import './App.css';
import countries from './countries.json'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import { useState } from 'react';

function App() {
  const items = countries;
  return (
    <div className="App">
       <Navbar/>
       <CountryList items = {items}/>
        
    </div>
  );
}

export default App;
