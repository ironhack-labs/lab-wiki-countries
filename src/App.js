import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar';
import { Route, Link, Switch } from "react-router-dom";


function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={data} />
      <CountryDetails country={data[1]} /> 
      {/* <Route path='/:ccn3' component={CountryDetails}/>   */}
      <h1>Hello there</h1>  
    </div>
  );
}

export default App;
