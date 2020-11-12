import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
       <Navbar />
       <CountriesList countries={countries}/>

        <Route exact path='/:cca3' component={CountryDetails}/>
      
      
       
    </div>
  );
}


export default App;
