import React from 'react';
import './App.css';

import CountriesList from './CountriesList'
import CountryDetail from './CountryDetail'

import { Route } from 'react-router-dom'


function App() {
  return (
    <> 
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5 list" >
            <div className = "list-group">
              <div className="list-group-item list-group-item-action"><Route path="/" exact render={() => <CountriesList />} /></div>
              <div className="col-7">
                <div className="list-group-item list-group-item-action"><Route path="/" exact render={() => <CountryDetail/>} /></div>
              </div>
            </div>
            </div>
        </div>
        </div>
      </>
  );
}

export default App;
