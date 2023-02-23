import './App.css';
import countriesData from './countries.json';
import { StrictMode, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from "axios"

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(response => {
            setCountries(response.data)
            setFetching(false)
        })
}, [])

  return (
    <div className="App">
      <StrictMode>
        <Navbar />
        {fetching && <p>Loading ...</p>}
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </StrictMode>
    </div>
  );
}
export default App;
