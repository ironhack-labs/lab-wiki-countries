import { useState, useEffect } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
// import countriesJson from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      const countryData = await response.json();
      console.log(countryData);
      setCountries([...countryData]);
    }
    fetchCountries();
  }, []);

  return (
    <div
      className="App"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <CountriesList countries={countries} />

      <Routes>
        <Route
          path=":alpha3Code"
          element={<CountryDetails countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
