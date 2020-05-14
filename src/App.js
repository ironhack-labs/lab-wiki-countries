import React from 'react';
import './App.css';
import CountrieList from './components/CountrieList';
import CountryDetail from './components/CountryDetail';

import { Route, Link } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <Link to='/' className="navbar-brand">WikiCountries</Link>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
        <Route path='/' component={CountrieList}/>
        <Route exact path='/:id'component={CountryDetail}/> 
          

        </div>
      </div>
    </div>
  );
}

export default App;
