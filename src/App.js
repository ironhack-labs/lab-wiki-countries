import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Components/Navbar/Navbar';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
  const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
