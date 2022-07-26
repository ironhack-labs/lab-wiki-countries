// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';


function App() {
  {/* need to make get request to get info from api */}
// hooks have to be outside of return

const [countries, setCountries ] = useState(null);
  
useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then(response => setCountries(response.data))
    .catch(err => console.log(err))
    }, []);

  return (
    <div className="App">

{/*     
    // fetch('https://ih-countries-api.herokuapp.com/countries', {'method': 'GET'})
    // .then(res => res.json())
    // .then(res => { */}
    {/* //   this.setState({ */}
    {/* //     countries: res */}
    {/* //   }) */}
    {/* // }) */}
    {/* // .catch(err => console.log(err)) */}
    
      <Navbar />
{/* 
      <CountriesList countries={countriesData} /> */}

      <Routes>
      <Route path="/" element ={<CountriesList countries={countries} />} />
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
