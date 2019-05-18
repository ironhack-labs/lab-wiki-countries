import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <Countries />
            <Route exact path="/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
