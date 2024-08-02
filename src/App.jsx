import "./App.css";

import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage"
import Navbar from "./components/Navbar"

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((allCountries) => {
      setCountries(allCountries.data)
    })
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
