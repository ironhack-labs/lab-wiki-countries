import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { getCountries } from './services/CountryService';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then(countries => {
        setCountries(countries);
      });
  }, []);

  const countriesSort = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="App d-flex flex-row">
      <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
        <div className='fixed-top mb-5'>
          <Navbar />
        </div>
        <div className='pt-5 ms-5'>
          <CountriesList countries={countriesSort} />
        </div>
      </div>
      <div style={{ width: '60%', position: 'fixed', top: 120, right: 400 }}>
        <Routes >
          <Route path="/:alpha3Code" element={<CountryDetails countries={countriesSort} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

