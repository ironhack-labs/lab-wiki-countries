// src/App.js
import './App.css';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => console.log('We had a problem getting the data'));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
