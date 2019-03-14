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
      </div>
    );
  }
}

export default App;
