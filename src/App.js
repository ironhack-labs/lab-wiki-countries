
import './App.css';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import countriesData from './countries.json';
import { CountryDetails } from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

const bUrl = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(bUrl);
      const data = await response.json();

      setCountries(data);
    }
    fetchCountries();
  }, []);
  
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <div className="col-7">
            <Routes>
              <Route index element={<h2>Select a country</h2>} />
              <Route
                path="/:id"
                element={<CountryDetails countries={countriesData} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
