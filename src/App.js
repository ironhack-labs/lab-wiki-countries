// src/App.js
import "./App.css";
//import axios from "axios";
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);

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