import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { CountryDetails } from './components/CountryDetails';
import { CountriesList } from './components/CountriesList';

// import countriesData from '../src/countries.json';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState('Loading countries...');

  const fetchData = async () => {
    const response = await fetch(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    const data = await response.json();
    const sorted = [...data].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCountries(sorted);
    setState('');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{state}</h1>
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/" element={<Outlet />} />
            <Route
              path=":countryId"
              element={<CountryDetails countries={countries} />}
            />

            <Route path="*" element={<h1>404 Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
