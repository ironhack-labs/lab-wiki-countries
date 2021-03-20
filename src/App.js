import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './component/NavBar';
import CountriesList from './component/CountriesList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList />
    </div>
  );
}

export default App;
