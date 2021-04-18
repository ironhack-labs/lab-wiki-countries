import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList />
            </div>

            <div className="col-7">
              <Route path="/:cca3" component={CountryDetails} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
