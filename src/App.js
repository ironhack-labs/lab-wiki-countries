import Router from './Router';
import { NavBar } from './components';
import './App.css';
import { CountriesList } from './components';
import { useState, useEffect } from 'react';
import countriesJSON from './countries.json';
const axios = require('axios');

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  const [countriesApiData, setCountriesApiData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => setCountriesApiData(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  console.log('API ON APPJS', countriesApiData);
  return (
    <div className="container">
      <div className="row">
        <NavBar></NavBar>
        <CountriesList countries={countriesApiData}></CountriesList>
        <Router />
      </div>
    </div>
  );
}

export default App;
