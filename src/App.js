import "./App.css";
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import countriesData from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        if (response.data)
          setCountries(response.data);
      });
  }, []);

  countries.sort((a, b) => a.name.common > b.name.common);
  return (
    <div className='App'>
      <Navbar />
      <Routes>
       <Route path="/" element={<CountriesList countries={countries} />} />
       <Route path="/countries" element={<CountriesList countries={countries} />} />
        <Route
          path="/countries/:id"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
      <CountriesList countries={countries} />
    </div>
  );
}
export default App;