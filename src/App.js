import React from 'react';
import logo from './logo.svg';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div>
      <Navbar/>
      <main className="container mt-4">
        <CountriesList/> 

      </main>
    </div>
  );
}

export default App;
