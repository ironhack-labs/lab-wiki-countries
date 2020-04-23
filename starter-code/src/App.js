import React from 'react';
import './App.css';
import Header from './components/Header';
import CountriesList from './components/CountriesList'

function App() {
  return (
    <div className="App">
      <Header />
      <CountriesList />
    </div>
  );
}

export default App;
