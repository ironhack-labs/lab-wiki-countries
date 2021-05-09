import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Route } from 'react-router-dom';
import {useState, useEffect } from 'react';
import axios from 'axios'


function App() {
  const [countriesList, setCountriesList] = useState([]);

  const loadCountries = () => {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag')
    .then(jsonResponse => {
      setCountriesList(jsonResponse.data)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    loadCountries();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <CountriesList countries={countriesList} />
        <Route
          path='/:alpha3Code'
          render={
            (props) => <CountryDetails {...props} countries={countriesList} />
        } />
      </div>
      
    </div>
  );
}

export default App;
