// Importing necessary components and modules:

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countriesJSON from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


// Declaring a constant to hold the API URL
const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  // * const [countries, setCountries] = useState(countriesJSON);

  // With API
  const [countries, setCountries] = useState([]);

  // Fetching data from API and update state using useEffect()
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiURL);
      setCountries(response.data);
    };

    fetchData();
  }, []);


  // Rendering the components
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesData={countries} />
          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;




