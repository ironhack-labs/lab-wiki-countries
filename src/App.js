import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

function App() {

  let navStyle = {
    backgroundColor: '#0f8ff4',
    color: 'white',
    padding: '20px'
  }
  return (
    <div>
      <div style={navStyle}>
        <h1>WikiCountries</h1>
      </div>
      <Route path='/:cca3' component={CountryDetail}/>
      <CountriesList />
    </div>
  );
}

export default App;
