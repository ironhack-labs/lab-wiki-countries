import './App.css';
import countriesData from "./countries.json";
import React, { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const  [countries, setCountries] = useState(countriesData);
  
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;