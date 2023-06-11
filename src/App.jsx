import './App.css';
import { useState } from 'react';
import data from './countries.json';
import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useEffect } from 'react';

const API_URL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL);
      setCountries(response.data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
