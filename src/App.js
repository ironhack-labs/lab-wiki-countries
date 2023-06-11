// src/App.js
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      setCountries(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />

      <Flex>
        <CountriesList countries={countries} />
        <CountryDetails />
      </Flex>
    </div>
  );
}
export default App;
