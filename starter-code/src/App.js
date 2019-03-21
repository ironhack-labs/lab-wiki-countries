import React, { Component } from 'react';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="country-container">
          <CountryList/>
          <Route path="/:cca3" component={ CountryInfo } />
        </div>
      </Router>
    );
  }
}

export default App;
