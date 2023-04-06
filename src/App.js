import React, { useState, useEffect } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countriesArray, setCountriesArray] = useState();

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountriesArray(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayCountries = () => {
    return (
      <div>
        <CountriesList countries={countriesArray} />
        <Routes>
          <Route
            path="/:countryCode"
            element={<CountryDetails countriesToSelectFrom={countriesArray} />}
          />
        </Routes>
      </div>
    );
  };
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {countriesArray ? displayCountries() : <h1>...</h1>}
    </div>
  );
}

export default App;
