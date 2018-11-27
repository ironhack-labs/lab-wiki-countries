import React, { Component } from 'react';
import './App.css';
import CountryList from "./components/CountryList/CountryList";
import Router from "./Router";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <div className="container">
              <div className="row">
                <CountryList/>
                  <Router/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
