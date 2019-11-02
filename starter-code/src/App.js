import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/NavBar'
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar headline="WikiCountries" />
        <div className="row">
          <Route path='/' component={CountryList} />
          <Route exact path='/:cca3' component={CountryDetail} />
        </div>
      </div>
    )
  }
}

export default App;
