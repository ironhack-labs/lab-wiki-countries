import logo from './logo.svg';
import './App.css';
import './components.js/CountriesList';
import './components.js/CountryDetails';
import './components.js/Navbar';
import { useEffect, useState } from 'react';
import CountriesList from './components.js/CountriesList';
import { Route, Router, Routes } from 'react-router-dom';
import CountryDetails from './components.js/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        const data = response.json();
        //Z -> A
        return data;
      })
      .then((countries) => {
        // A -> Z
        const sortedCountries = countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
