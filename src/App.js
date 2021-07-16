import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navabr';
import axios from 'axios';

class App extends Component {
  state = { countries: [] };
  render() {
    return (
      <>
        <Navbar />
        <div style={{ display: 'flex' }}>
        <CountriesList countries={this.state.countries} />
      </>
    );
  }
}

export default App;
