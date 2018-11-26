import React, { Component } from 'react';
import './App.css';
import NavBAr from './components/NavBAr/NavBar'
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.css'; 
import Router from './Router';

class App extends Component {
  render() {
    return (
    <div className="App">
      <NavBAr/>
      <div className="container">
      <Home />
      <Router/>
      </div>
      </div>
    );
  }
}

export default App;
