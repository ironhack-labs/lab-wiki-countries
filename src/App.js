import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesArr from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesArr);
  const baseAPI = 'https://ih-countries-api.herokuapp.com/countries.';

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    axios
      .get(baseAPI)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountryList countries={countries} />;
              <CountryDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
