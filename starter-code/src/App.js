import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import { Switch, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetail.jsx';
import CountryList from './Components/CountryList.jsx';

import Contries from './countries.json';

export default function App() {
  // uma lista de países. Com nome e flag.
  // link passado para o componente filho.
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ height: '90vh', overflowY: 'scroll', fontSize: '12px' }}
          >
            <CountryList countriesArr={Contries} />
          </div>
          <div className="col-7">
            <Route
              exact
              path="/:countryId"
              render={(props) => (
                <CountryDetails countriesArr={Contries} {...props} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
