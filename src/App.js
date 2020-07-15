import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

import listCountries from './countries.json'

import {Switch, Route} from 'react-router-dom'


function App () {
  return (
    <div className="container">

      <div className="row">
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <CountriesList listCountries={listCountries} />
        </div>
        <div className="col-7" style={{ maxHeight: '90vh', overflow: 'scroll' }}>

      <Switch>
        <Route path="/country-detail/:id" render={props => {
          return <CountryDetail listCountries={listCountries} {...props}/>;
        }} />
       
      </Switch>
        </div>

      </div>
    </div>

  );
}

export default App;
