import logo from './logo.svg';
import './App.css';
import './components.js/CountriesList';
import './components.js/CountryDetails';
import './components.js/Navbar';
import { useEffect, useState } from 'react';
import CountriesList from './components.js/CountriesList';
import { Route, Router } from 'react-router-dom';

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
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
