import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
// import allCountries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState('');

  useEffect(() => {
    let url = 'https://ih-countries-api.herokuapp.com/countries';
    axios
      .get(url)
      .then((data) => {
        setCountries(data.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {countries.length === 0 && <h2>Loading</h2>}
        {countries.length !== 0 && (
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route
                path="/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
