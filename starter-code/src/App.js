import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom'; 

import CountryWiki from './components/countryWiki';

function App() {
  return (
    <div className="App">
      <Route path="/" component={CountryWiki} />
      
    </div>
  );
}

export default App;
