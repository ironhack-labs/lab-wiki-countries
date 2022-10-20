import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [listofCountries, setListOfCountries] = useState(countries);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setListOfCountries(response.data);
      })
      .catch((e) => console.log('error getting characters from API', e));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section className="contries-conatiner">
        <CountriesList countries={listofCountries} />
        <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={listofCountries} />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
