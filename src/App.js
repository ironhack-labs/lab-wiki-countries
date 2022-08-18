import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './CountryDetails/CountryDetails';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  const countriesApi = 'https://restcountries.com/v3.1/all  ';

  const getCountries = async () => {
    try {
      let response = await axios.get(countriesApi);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route
          path="/country-details/:countryCca3"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}
export default App;
