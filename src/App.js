import React from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import { Route, Link } from 'react-router-dom';

function App() {
    
  return (
    <div className="App">
      <Navbar />
      <div style={{display: "flex"}}>
      <CountriesList data={countries} />
      <Route path='/:id' render={(props) => <CountryDetails {...props} data={countries}/>} /> 
      </div>

      
    </div>
  );
}

export default App;

