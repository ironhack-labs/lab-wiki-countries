import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((result) => {
        setCountries(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        {countries ? (
          <div className="row">
            <div className="col">
              <CountriesList countries={countries} />
            </div>
            <div className="col">
              <Routes>
                <Route path="/:id" element={<CountryDetails />} />
              </Routes>
            </div>
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '80vh' }}
          >
            <div className="spinner-border" role="status"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
