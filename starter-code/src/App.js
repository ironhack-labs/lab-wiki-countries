import React from 'react';
import CountryList from './components/countryList'
import countries from "./countries.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <CountryList />
    </div>
  );
}

export default App;
