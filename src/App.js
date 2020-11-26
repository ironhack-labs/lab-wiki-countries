import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import CountryList from './components/CountriesList'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <CountryList/>
    </div>
  );
}

export default App;
