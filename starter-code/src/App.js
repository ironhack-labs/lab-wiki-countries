import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries'
import CountryDetail from './components/CountryDetail'


import { Switch, Route } from 'react-router-dom'



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
          <Route path='/' exact component={Countries} />
          <Route path='/detail/:country_id' component={CountryDetail} />
        </Switch>

      </div>
    );
  }
}

export default App;
