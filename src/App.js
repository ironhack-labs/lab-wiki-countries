import './App.css';
import { useState, useEffect } from 'react';
import countries from './countries.json';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

function App() {
  const [myCountries, setMyCountries] = useState(countries);

  const getCountries = () => {
    axios
      .get(' https://ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        setMyCountries(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="App-main">
      <NavBar countries={myCountries} />
      <div className="columns">
        <CountriesList countries={myCountries} />
        <Routes>
          <Route
            path=":alpha3Code"
            element={<CountryDetails countries={myCountries} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
