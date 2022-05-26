import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
/* import HomePage from './components/HomePage'; */
/* import countries from './countries.json'; */

import { Routes, Route } from 'react-router-dom';

function App() {
  const [contries, setContries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        let countriesData = response.data;
        setContries(countriesData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <body>
      <div className="App">
        <Navbar />
        <Routes>
          {/*   <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<CountriesList countries={contries} />} />
          <Route
            path="/:id"
            element={<CountryDetails countries={contries} />}
          />
        </Routes>
      </div>
    </body>
  );
}

export default App;
