
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from "./countries.json"



function App() {
  
  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(()=>{
    fetchCountries()
  }, [])

  const fetchCountries = () => {
    axios.get('https://ih-countries-api.herokuapp.com/countries%27')
    .then((response) => {
      setCountries(response.data)
      setFetching(false)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Navbar />

      

      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/"
              element={
                <CountriesList countries={countries} fetching={fetching} />
              }
            />
            <Route
              path="/countries/:id"
              element={
                <CountryDetails countries={countries} fetching={fetching} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  ); 
}
export default App;
