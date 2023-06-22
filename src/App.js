import { useState } from 'react';
import './App.css';
import allCountries from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState(allCountries);
  // console.log("countries", countries);

  return (
    <div className="App">
      <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <CountriesList countries={countries} />
              <Routes>
                <Route path="/:countryCode" element={ <CountriesDetails countries={countries} /> } />
              </Routes>
            </div>
          </div>

          </div>
    </div>
  );
}

export default App;
