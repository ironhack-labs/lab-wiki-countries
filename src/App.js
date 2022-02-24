import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from './components/CountriesList';
import CountryDetails from "./components/CountryDetails";
import jsonCountries from "./countries.json";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from 'react/cjs/react.production.min';
import axios from "axios";

function App() {
  const [ countries, setCountries ] = useState(jsonCountries)
  
  useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(response => setCountries(response.data))
        .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className='row'>
            <CountriesList countries={countries} />
        </div>
      </div>
      <Routes>
        {countries.map(country => {
          return <Route key={`/${country.alpha3Code}`} path="/:countryCode" element={<CountryDetails countries={countries} />} /> 
        })}
      </Routes>
    </div>
  );
}

export default App;
