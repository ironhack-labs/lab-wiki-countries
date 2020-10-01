import React from 'react';
import './App.css';
import CountriesList from './countriesList/CountriesList'

import countries from './countries.json'

function App() {
  return (
    <>
      <CountriesList countries={countries}/>
    </>
  );
}

export default App;
