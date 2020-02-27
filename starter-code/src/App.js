import React from 'react';
import logo from './logo.svg';
import countries from './countries.json';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import './App.css';
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div id='root'>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="row">
        <div class="col-5 list-group-item list-group-item-action scrolling">
          <Route path='/' component={CountryList}  />
        </div>
        <div class="col-7">
          <Route path='/:countryId' component={CountryDetail}  />
        </div>
      </div>
      
      {/* <Route path='/:countryId' component={CountryDetail} exact /> */}
      </div>
    </div>
  );
}

export default App;
