import './App.css';
import React from 'react'
import { useState, useEffect } from "react"
import { Routes, Route, NavLink } from "react-router-dom"

import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json'
import axios from 'axios'




function App() {

  let [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      <Navbar />
      <div className='flex'>
        <div>
          {countries.length ? <CountryList countries={countries} /> : ''}
        </div>
        <Routes>
          {countries.length ? <Route path="/:countryId" element={<CountryDetails countries={countries} />} /> : ''}
        </Routes>
        {/* <CountryDetails /> */}
      </div>
    </div>
  );
}

export default App;
