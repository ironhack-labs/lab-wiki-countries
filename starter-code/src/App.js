import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetails from './Components/CountryDetails'

class App extends Component {
  countriesToBeShown = ["EE", "ES", "DE"
  ]

  render() {
    return (
      <div className="App">
        <div className="countries">
          <CountryDetails />
        </div>
      </div>
          
    );
  }
}

export default App;
