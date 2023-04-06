import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesData from './countries.json';
import { useState, useEffect } from 'react';
import { getCountries } from './services/countriesServices'

function App() {
  const [countries, setCountries] = useState(countriesData);

  useEffect(() => {
    getCountries().then((countries) => setCountries(countries));
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div class="col-4">
            <CountriesList countries={countries} />
          </div>
          <div class="col-6">
            <Routes>
              <Route
                path="/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
