import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import CountryDetail from './CountryDetail'

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>  
      <div>
        <CountryDetail/> 
      </div>
    </div>
  );
}

export default App;
