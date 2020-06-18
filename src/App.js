import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import CountriesList from './components/CountriesList'
import {Route} from "react-router";
import CountryDetail from './components/CountryDetail'


function App() {
  return (
    <div className="App">
      <h1>WikiCountries</h1>
      <Route path='/:cca3' component={CountryDetail}/>
      <CountriesList/>   
    </div>
  );
}

export default App;

