import './App.css';

import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
// import CountriesData from './countries.json'
import CountryDetails from './Components/CountryDetails';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

import axios from 'axios';


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])


  return (
    <div className="App">
      <Navbar />
      <br></br>
      <CountriesList countries={countries}/>

      <Routes>

          <Route path="/:country_id" element={ <CountryDetails countries={countries} /> } />

      </Routes>

    </div>
  );
}

export default App;
