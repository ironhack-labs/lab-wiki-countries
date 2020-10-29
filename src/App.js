import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Link } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import countries from './countries.json';

function App() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <CountriesList countries={countries} />
          </div>
          <div class="col-sm-8">
            {/* Dynamic path */}
            <Route path="/country/:countryId" component={CountryDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
