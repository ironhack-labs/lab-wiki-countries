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
    <Link to='/yo'>Link</Link>
      <Navbar />
      <CountriesList data={countries} />
      <Route path='/yo' component={CountryDetails}/>
    </div>
  );
}

export default App;
