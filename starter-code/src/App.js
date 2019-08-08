import React, { Component } from 'react';
import Home from './components/Home';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import Nav from './components/Nav'
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <div className="App">
        <Countries />
        <Route exact path="/" component={Home} />
        <Route path="/details/:cca3" component={CountryDetails} />
      </div>
      </div>
    );
  }
}

export default App;
