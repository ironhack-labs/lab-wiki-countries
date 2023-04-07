// src/App.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

//import countries from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [countriesArr, setCountriesArr] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesArr(response);
      })
      .catch((e) => {
        console.log('error getting countries from API...', e);
      });
  }, []);

  const displayCountriesList = () => {
    return (
      <div className="row">
        <CountriesList countriesArr={countriesArr.data} />
        <Routes>
          <Route
            path="/:countryId"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    );
  };
  console.log(countriesArr);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {countriesArr ? displayCountriesList() : <p>loading....</p>}
      </div>
    </div>
  );
}
export default App;
