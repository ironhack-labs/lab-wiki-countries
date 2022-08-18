/*import logo from './logo.svg';*/
import './App.css';

import Navbar from './components/Navbar';
// import countryList from './countries.json';
import { useState, useEffect } from 'react';

import CountriesList from './components/CountriesList';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  const baseUrl = 'https://ih-countries-api.herokuapp.com';

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    axios
      .get(baseUrl + '/countries')
      .then((res) => {
        setCountries(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      {countries.length === 0 ? (
        <div>⏳⌛️⏳</div>
      ) : (
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
          </div>

          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
