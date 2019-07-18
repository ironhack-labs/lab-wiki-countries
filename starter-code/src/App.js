import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryList from "./CountryList"
import countries from './countries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
       
         
         <CountryList allcountries={countries}></CountryList>
        
      
      </div>
    );
  }
}

export default App;
