import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <div className="App">
      <header className="App-header">WikiCountries</header>
        <CountryDetail/>

    </div>
  );
}

export default App;
