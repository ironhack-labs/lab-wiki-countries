import React, { Component } from 'react';
import Router from './Router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
              <Router/>
      </div>
    );
  }
}

export default App;
