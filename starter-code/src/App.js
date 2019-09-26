import React from 'react';
import countries from './countries.json';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import CountryDetail from './components/CountryDetail.js';


function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Wiki Countries</span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="list col-5  overflow-auto">
              {countries.map(country => (
                <div key={country.cca3} className="country-box">
                  <Link className="link" to={`/country/${country.cca3}`}>
                  <span className="flag">{country.flag}</span>
                  {country.name.common}
                  </Link>
                </div>
              ))}
          </div>
          <div className="col-7 detail">
            <Switch>
                <Route exact path="/country/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
