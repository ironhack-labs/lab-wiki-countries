import React from 'react';
import './App.css';
import countries from './countries.json';
import { Link, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5 list-scroll">
            <div className="list-of-countries  ">
              {countries.map(country => (
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/country-detail/${country.cca3}`}
                >
                  <img
                    src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                    alt="flag country"
                  />
                  <p>{country.name.common}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="detail-container">
            <Route path="/country-detail/:cc3a" component={CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;