import React from 'react';
import './App.css';

import countries from './countries.json';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        WikiCountry
      </header>
      <ul>
        {countries.map(country => <li><a href="#">{country.name.common}</a></li>)}
      </ul>
    </div>
  );
}

export default App;
