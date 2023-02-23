import axios from "axios"
import { useState, useEffect } from 'react';
import './App.css';
import countriesData from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {
  const [fetching, setFetching] = useState(true)
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    axios.get(apiURL)
        .then(response => {
            console.log(response.data)
            setCountries(response.data)
            setFetching(false)
        })
}, [])
  
  return (
    <div className="App">
        <Navbar />
        {fetching && <p>Loading ...</p>}
      <div className="container">
        <div className="row">
    
            <CountriesList countries={countries} />

          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries}/>} />
          </Routes>

          </div>
        </div>
      </div>
  );
}

export default App;
