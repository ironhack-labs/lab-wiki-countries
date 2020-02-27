import React from 'react';
import logo from './logo.svg';
import countries from './countries.json';
import './App.css';
import { Route } from 'react-router-dom';
import CountryList from './Component/CountryList';
import CountryDetail from './Component/CountryDetail';

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-5">
          <Route path="/" component={CountryList} />
        </div>
        <div class="col-7">
          <Route path="/:countryId" component={CountryDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;
