import React from 'react';
import './App.css';
import CountriesWiki from './pages/CountriesWiki';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
      <h2 className="app-title">WikiCountries</h2>
          <CountriesWiki/>
      </div>
    );
  }
}

export default App;
