import React, { Component } from 'react';
import './App.css';
import ListCountries from './components/ListCountries'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ListCountries />
        <h3>My Google Maps Demo</h3>
        

      </div>
    );
  }
}

export default App;
