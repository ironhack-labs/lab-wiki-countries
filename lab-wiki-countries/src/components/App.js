import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import CountriesList from './CountriesList';
// import CountryDetails from './CountryDetails';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container flex">
        <div className="row">
            <CountriesList />
        </div>
      </div>
    </div>
  );
}

export default App;
