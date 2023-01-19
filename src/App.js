
import './App.css';
import countriesFromJson from "./countries.json"

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {
  const countriesURL = "https://ih-countries-api.herokuapp.com/countries"
  // const [countriesArr,setCountriesArr]=useState(countriesFromJson) //for iteration 1-2
  const [countriesArr,setCountriesArr]=useState(null) //for iteration 3-

  useEffect(()=>{
    axios.get(countriesURL)
      .then(response=>{
        setCountriesArr(response.data.sort((a,b)=>{return a.name.common.localeCompare(b.name.common)}))
      })
      .catch(e=>{
        console.log("there was an error getting the list of countries",e)
      })
  },[])
  

  return (
    <div className="App">
      <Navbar />
      <div className="container-row">
        <CountriesList countriesArr={countriesArr} />
        <Routes>
          <Route path="/" element={<h3>Welcome to WikiCountries</h3>} />
          <Route
            path="/:countryId"
            element={<CountriesDetails countriesArr={countriesArr} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
