// src/App.js
import "./App.css";
import axios from "axios";
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
    .get('https://ih-countries-api.herokuapp.com/countries')
    .then( response => {
      setCountries(response.data);
    })
    .catch(e => console.log('error getting countries from API', e));
  }, []);

  return (
  <div className="App">
  <Navbar />
  <CountriesList countries={countries} />
  {/*<CountryDetails country={countryId} />*/}
  <Routes>
  {/*  <Route path='/' element={<CountriesList countries={countries} />} />*/}
    <Route path='/countries/:countryId' element={<CountryDetails />} />
  </Routes>
  </div>
  )
}

export default App;