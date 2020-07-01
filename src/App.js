import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <div id="root">
        <Navbar />
        <div className="container">
          <Route path="/" component={CountriesList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
