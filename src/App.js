import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries([...response.data]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ overflow: 'scroll', maxHeight: '90vh' }}
            > 
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <CountriesList countries={countries} />
            )}
            </div>
            <Switch>
              <Route
                path="/:alpha3Code"
                render={(routeProps) => 
                  <CountryDetails {...routeProps} countries={countries} />
                }
              />
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;