import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { React, useState, useEffect } from 'react';
import axios from "axios"

function App() {
  const [countriesList, setCountries] = useState(countries);

  useEffect(()=> {
axios.get(" https://ih-countries-api.herokuapp.com/countries")
.then(response => {
  console.log(response.data)
  setCountries(response.data)
})
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesList} />
          <Routes>
       <Route path="/:alpha3Code" element={ <CountryDetails countriesList={countriesList} /> } />
       </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
