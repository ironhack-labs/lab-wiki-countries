// src/App.js
import './App.css';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';



function App() {
  useState([]);
  const [countries2, setCountries] = useState([]);
  useEffect(() => {
    Axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log('Error getting countries', error);
      });
  }, [setCountries]);

  return (
    <div className="App">
      <Navbar />

      <Flex>
        <CountriesList countries={countries} />
        <Routes>
          <Route
            path="/:id"
            element={<CountriesDetails countries={countries} />}
          />
        </Routes>
      </Flex>
    </div>
  );
}
export default App;
