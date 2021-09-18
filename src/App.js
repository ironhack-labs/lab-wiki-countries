import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {        
        setCountries([...response.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {loading ? (
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          ) : (
            <CountriesList countries={countries} />
          )}
          <Route
            path="/:alpha3Code"
            render={(routeProps) => (
              <CountryDetails {...routeProps} countries={countries} />
            )}
          ></Route>
        </div>
      </div>
    </div>
  );
};

export default App;
