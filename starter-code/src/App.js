import React from 'react';
import Nav from './components/Nav'
import CountryDetail from './components/CountryDetail'
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import countries from './countries.json'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
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
    </BrowserRouter>
  );
}

export default App;
