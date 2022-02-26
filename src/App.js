import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countriesDatabase from "./countries.json"
import CountryDetails from './components/CountryDetails'
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(countriesDatabase)

  // use useEffect() with an empty array, as the second parameter to execute what is defined in the callback whenever the component is mounted
  useEffect(() => {
    // fetch the data
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        // set state of characters
        setCountries(response.data)
      })
      .catch(err => console.log(err))

  }, [])


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ul>
          <CountriesList countriesProp={countries} />
        </ul>
        <Routes>
          <Route path="/countries/:countryId" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
