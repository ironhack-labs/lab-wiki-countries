// src/App.js
import "./App.css";
import countriesArray from "./countries.json";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
// import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState(countriesArray);
  return (
    <div className="App">
      <Navbar countries = {countries}/>
      <CountriesList countries = {countries}/>
    </div>)
  
}
export default App;