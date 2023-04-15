import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      {countries.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
