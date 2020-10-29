import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path='/'/>
      
      <div className='Main-Container'>
      <CountriesList  />
      </div>
    </div>
  );
}

export default App;
