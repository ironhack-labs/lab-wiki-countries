import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { useEffect, useState } from 'react';
import AxiosCountryAPI from './services/country.services';
// import countries from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    AxiosCountryAPI
      .getCountries()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((err) => {
        console.error(err);
        setError('Error');
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:idCountry" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
