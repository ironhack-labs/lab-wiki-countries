import './App.css';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import { getData } from './services/data-service';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getData().then((countries) => {
      setCountries(countries);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="row">
        <div className="col-4">
          <CountriesList countries={countries} />
        </div>

        <div className="col-6">
          <Routes>
            <Route
              path="/countries/:alpha3Code"
              element={<CountryDetail countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
