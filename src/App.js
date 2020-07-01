import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import {  Route } from 'react-router-dom'; 
import CountriesDetail from './components/CountryDetail';


function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="row text-left">
        <div className="col-5 list-container">
          <CountriesList />
        </div>
        <div className="col-7">
          <Route exact path="/countriesdetail/:id" component={CountriesDetail} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
