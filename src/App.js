import logo from './logo.svg';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from "./countries.json"
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [country, setCountry]= useState(countries)
  const myCountries  = () => {
    axios
    .get('https://ih-countries-api.herokuapp.com/countries.')
    .then((response) => {
      setCountry(response.data)
    })
  }
  useEffect(() => {
    myCountries()
  }, [])
  return (
    <div className="App">
    <CountriesList countries={countries}/>
<Routes><Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } /></Routes>
    </div>
  );
}

export default App;
