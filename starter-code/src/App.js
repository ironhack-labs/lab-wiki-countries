import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail'
import countriesJSON from './countries.json'

class App extends Component {

  constructor(){
    super()
    this.state ={
      countries: countriesJSON
    }
  }
  render() {
    return (
      <div className="App">
       <CountryDetail countries={countriesJSON} />
      </div>
    );
  }
}

export default App;
