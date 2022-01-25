import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(
        response.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      );
    } catch (error) {
      window.alert('It seems we could not return the requested data');
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CountriesList countries={countries} />
          </div>
          <div className="col-md-8">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="px-2 py-3">
                    <h1>Welcome to WikiCountries!</h1>
                    {countries.length === 0 ? (
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: 8 }}
                      >
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        ></div>
                        <span>Loading countries...</span>
                      </div>
                    ) : (
                      <p>Select a country to find out more.</p>
                    )}
                  </div>
                }
              />
              <Route path="countries">
                <Route
                  path=":id"
                  element={<CountriesDetails countries={countries} />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
