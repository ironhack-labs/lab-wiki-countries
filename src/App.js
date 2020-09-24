import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ul><CountriesList/></ul>
      


    </div>
  );
}

export default App;
