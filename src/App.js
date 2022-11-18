import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
//import countries from "./countries.json"
import {Routes, Route} from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import React, { useEffect, useState } from "react";
import axios from "axios"

const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() =>{
    const apiCAll = async () => {
      const res = await axios.get(apiURL)
      
      setCountries(res.data)
    }
    apiCAll()
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/countries" element={<CountriesList countriesL={countries} />} />
        <Route path="/countries/:id" element={<CountryDetails data={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
