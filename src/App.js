import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [countriesApi, setCountriesApi]=useState(null)
  useEffect(()=>{
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(response=>{
      setCountriesApi(response.data)
    })
    .catch(e=>console.log("error...",e))
  },[])
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          {countriesApi ? <CountriesList countries={countriesApi} /> : "loading...."}
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countriesApi} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
