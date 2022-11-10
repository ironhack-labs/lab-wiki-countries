
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './pages/CountryDetails';
import CountriesList from './pages/CountriesList';
import { Routes, Route } from 'react-router-dom';
import countries from "./countries.json"
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {

  const [theCountries, setCountries] = useState([]);

 useEffect(()=> {




axios.get("https://ih-countries-api.herokuapp.com/countries")
.then((res) => {
  console.log({RESPONSEDATA: res.data})
  setCountries(res.data)
  console.log(theCountries)
})


 }, [])
     
  
  return (
    <div className="App">
  
    <Navbar/>
    <p></p>
   
    <Routes>
   

    <Route 
            path="/:alpha3Code"
            element={<CountryDetails />} />
    </Routes>
  
    <div className="flexBoks">
  <CountriesList apiCountries={theCountries}/> 
  
  </div>

    </div>
  );
}

export default App;
