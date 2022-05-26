import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import uuid from 'react-uuid';

function App() {
  const [countriesList, setCountriesList] = useState(null);

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    try {
      const countriesAPI = await axios({
        method: 'get',
        url: ' https://ih-countries-api.herokuapp.com/countries',
      });
      const filterCountries = countriesAPI.data.sort((a, b) => a.name.common > b.name.common ? 1 : -1);
      setCountriesList(filterCountries);
    } catch (err) {
      console.log(err);
    }
  }
  if (countriesList === null) {
    return <h3>...Loading</h3>
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesList={countriesList} />
          <Routes>
            <Route path="/details/:countryCode" element={<CountryDetails key={uuid} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
