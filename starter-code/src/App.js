import React from 'react';
import './App.css';

import Countries from './components/Countries'
import CountryDetail from './components/CountryDetail'

import countriesData from './countries.json'

import { Switch, Route } from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <div className="title">
        <h1 className="my-3">WikiCountries</h1>

      </div>
      <div className="container">


        <div className="row">
          <div className="col-5" >
            <Countries Countries={countriesData} />

          </div>
          <div className="col-7" >

            <Switch>

              <Route path="/country-detail/:id" render={props => {
                return <CountryDetail Countries={countriesData} {...props} />;
              }} />
            </Switch>

          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
