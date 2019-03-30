import React, { Component } from 'react';
import CountryList from './components/CountryList';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="root">
          <div>
            <NavBar />
            <CountryList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
