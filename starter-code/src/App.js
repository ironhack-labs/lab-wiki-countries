import React from 'react';
import './App.css';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="uk-flex uk-flex-wrap-stretch uk-width-1-1" uk-height-viewport="expand: true">
        <CountriesList countries={countries} />
        <Routes />
      </div>
    </div>
  );
}

export default App;
