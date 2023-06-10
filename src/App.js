import countriesJSON from './countries.json';
import './App.css';
import { useState,useEffect } from 'react';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCountries = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        setCountries(allCountries.data);
      } catch (error) {
        console.log('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  console.log('here are the countries', countries);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
