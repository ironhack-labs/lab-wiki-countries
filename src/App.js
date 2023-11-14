import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import countriesJson from "./countries.json"
import CountriesList from './components/CountriesList';
import { Routes, Route } from "react-router-dom";

function App() {

  const [countries, setCountries] = useState([])
  useEffect(() => {
   setCountries(countriesJson)
  }, []);
  
  return (
    <>
    <div className="App">
    </div>
      
    </>
  );
}

export default App;
