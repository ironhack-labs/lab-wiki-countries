import {useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import countriesFromJson from "./countries.json";
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';



function App() {

  const[countries, setCountries] = useState(countriesFromJson);
  const apiURL = "https://ih-countries-api.herokuapp.com/countries"


  useEffect(() => {
    axios.get(apiURL + "/countries")
      .then(response => {
        setCountries(response.data);
      })
      .catch(e => {
        console.log("error getting characters from API...", e);
      })
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/countries/:alpha3Code" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
