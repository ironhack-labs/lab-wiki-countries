import './App.css';
// import countries from '../src/countries.json';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';

const apiURL = ' https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('apiURL');
        const data = await response.json();
        setAllCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList></CountriesList>} />
            <Route
              path="/country/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
