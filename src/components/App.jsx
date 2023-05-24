import { Route, Routes } from 'react-router-dom';
import "./App.css";
import countries from './../countries.json';
import Navbar from "./Navbar/Navbar";
import CountriesList from "./CountriesList/CountriesList";
import CountryDetails from './CountryDetails/CountryDetails';
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";


function App() {
  {/* rendering from API */ }
  const [countriesApi, setCountriesApi] = useState(countries)

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesApi(response.data)
      }, [])
  })



  return <div className="App">
    <Navbar />
    <div className='container'>
      <div className="row">
        <CountriesList countries={countries} />
        {/* rendering from API */}
        <CountriesList countries={countriesApi} />

        <Routes>
          <Route path='/:id' element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  </div>
}
export default App;


