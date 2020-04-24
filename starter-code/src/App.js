import React from 'react';
import './App.css';
import ListCountries from './components/ListCountries';
import Country from './components/Country';
import { Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WikiCountries
        </p>
      </header>
      <div className='Container'>
      </div>
      <Route path='/' component={ListCountries} />
      <Route exact path='/:id' component={Country} />
    </div>
  );
}

export default App;
