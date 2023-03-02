import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';

import logo from './logo.svg';
import './App.css';

function App() {
  const [allCountries, setAllContries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setAllContries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList allCountries={allCountries} />

          <Routes>
            <Route
              path="/country-details/:alpha3Code"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
