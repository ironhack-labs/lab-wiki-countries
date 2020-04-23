import React from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail'
import { Route, Link } from "react-router-dom";

function App() {
  const countriesCopy = [...countries];



  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {countriesCopy.map((country, index) => {
                  return <Link key={index} className="list-group-item list-group-item-action" to={country.cca3}>{country.flag} {country.name.common}</Link>
                })}
              </div>
            </div>
            <Route exact path="/:id" component={CountryDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




    

