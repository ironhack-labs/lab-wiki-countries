import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {  Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

function App() {

  const [countriesArr, setCountriesArr] = useState(null);

  const apiURL="https://ih-crud-api.herokuapp.com/countries"

 

  useEffect(() => {
   axios.get(apiURL)
   .then((response) => {
    console.log(response.data)
    setCountriesArr(response.data);
   })
   .catch(e => {
    console.log("error getting countries from API...", e);
  })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {countriesArr && <CountriesList countries={countriesArr} />}
          <Routes>
            <Route path='/:alpha3Code' element={<CountryDetails countries={countriesArr} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
