import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countryArr from "./countries.json";
import { Routes, Route, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(countryArr);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/countries/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
