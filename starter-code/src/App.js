import React, { Component } from 'react';
// import projects from './CountryDetail';
import { projects } from './CountryDetail';

import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Switch>
        <Route exact path='/projects' component={projects}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
