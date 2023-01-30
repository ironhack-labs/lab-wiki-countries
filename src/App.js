import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="d-inline-flex">
              <CountriesList
                countries={countries}
                setCountries={setCountries}
              />
            </div>
          }
        />
        <Route
          path="/:countryId"
          element={
            <div className="d-inline-flex">
              {' '}
              <CountriesList
                countries={countries}
                setCountries={setCountries}
              />
              <CountryDetails
                countries={countries}
                setCountries={setCountries}
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
