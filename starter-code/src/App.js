import React, { Component } from 'react';
import CountryDetail from './components/CountryDetail';
import Countries from './countries.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryDetail countries={ Countries } />
      </div>
    );
  }
}

export default App;