import React, { useState, useEffect } from 'react';
import './App.css';
import countriesData from './countries.json';
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
