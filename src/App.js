// src/App.js
import './App.css';
import country from './countries.json';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios'

function App() {
  const [countryArr, setCountryArr] = useState(country);
  const countryUrl = "https://ih-countries-api.herokuapp.com/countries"

  useEffect(() => {
    axios.get(countryUrl)
    .then((res) => {
   
      setCountryArr(res.data)
    })
  })

  return (
    <div className="App">
      <NavBar />

    <div className='container'>
      <div className='row'>
      <CountriesList countryArr={countryArr} />
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countryDetails={countryArr} />}
          />
        </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
