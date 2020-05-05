import React, { Component } from 'react';
import './App.css';
import data from './countries.json';
import FlagsTable from './components/FlagsTable';
import Routes from "./Routes";

class App extends Component {

  render() {
    const flagData = data;

    return (
      <div className="App">
        <h4 className="wiki-title">WikiCountries</h4>
        <div className="wiki-container">
          <FlagsTable data={flagData} />
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
