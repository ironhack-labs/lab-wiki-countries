import React, { useState, useEffect } from 'react';
import './App.css';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData)
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
