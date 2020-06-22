import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={CountriesList}/>
    </div>
  );
}

export default App;
