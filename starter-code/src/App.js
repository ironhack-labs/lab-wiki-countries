import React from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import { Route, BrowserRouter } from 'react-router-dom';
import countries from './countries.json';
import { Link } from 'react-router-dom';


function App() {
  console.log(countries)
  return (
    <BrowserRouter>
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="AppUndDetails">
        <div className="App">
          <h2>Übersicht Hauptseite</h2>
          {countries.map(country => {
            return (
              <div key={country.name.common}>
                <li>
                  {country.flag}
                  <Link to={`/countries/${country.cca3}`}> {country.name.common}</Link></li>
             </div>     
              
            )
          })}
          </div>
          <div className="CountryDetails">
            <Route exact path='/countries/:countryId' component={CountryDetail} />
          </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
