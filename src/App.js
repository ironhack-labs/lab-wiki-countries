import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

import axios from 'axios';

const countriesAPIUrl = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios
      .get(countriesAPIUrl)
      .then((res) => {
        setCountriesList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countriesList} />} />
        <Route
          path="/:countryCode"
          element={<CountryDetail url={countriesAPIUrl} />}
        />
      </Routes>
    </div>
  );
}

export default App;
