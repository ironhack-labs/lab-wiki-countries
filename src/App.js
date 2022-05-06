import './App.css';
import Navbar from './components/Navbar'

// import CountriesData from './countries.json'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from 'react';

const pageTitle="WikiCountries"

function App() {
  const [fetching, setFetching] = useState(true);
  const [countriesListAPI, setCountryList] = useState(null);

  useEffect( () =>  {
      const fetchData = async ()=> {
          const responseData = await fetch('https://ih-countries-api.herokuapp.com/countries/')
          const country = await responseData.json()
          setCountryList(country);
          setFetching(false);     
      }
      fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar title={pageTitle} />
     <div className="container">
      <div className="row">
      <div className="col-5 d-flex justify-content-center">      
        {!fetching ? <CountriesList countries={countriesListAPI} /> : <div className="spinner-grow text-secondary" role="status"><span className="visually-hidden">Loading...</span></div> }
      </div>
      <div className="col">
        <Routes>
          <Route path="/" element={<div className='container-box position-sticky sticky-top text-center'><h1>Choose a country</h1></div>}/>
          <Route path="/:countryCode" element={<CountryDetails />} />
        </Routes>  
      </div>
      </div>
     </div>  
    </div>
  );
}

export default App;