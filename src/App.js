import './App.css';
// import countries from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(data)
    };
   fetchCountries();
  });
  if (countries === null) {
    return "Loading...";
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
