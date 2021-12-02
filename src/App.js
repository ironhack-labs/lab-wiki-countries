import './App.css';
import React, { Component } from "react";
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';

class App extends Component {

render() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList listcountries={countries} />
      
    </div>
  );
  }
}

export default App;