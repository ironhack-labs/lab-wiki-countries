import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import countries from "./countries.json";
import Menu from "./Components/Menu/Menu"

class App extends Component {
  constructor(){
    super()
    this.state = { countries: countries }
  }



  render() {
    return (
      <div className="App">
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <Menu className="list-group-item list-group-item-action" countries={this.state.countries}></Menu>
      </div>
    );
  }
}

export default App;
