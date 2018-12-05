import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryDetail from "./components/CountryDetail"
import CountriesJson from "./countries.json";



class App extends Component {
  constructor () {
    super()
    this.state = {
      countries: CountriesJson
    }
  }


  render() {
    return (
      <div className="App">

    {this.state.countries.map((country, idx) => {
      return < CountryDetail pais={country} idx={idx}/>
      
    })}
      </div>
    );
  }
}

export default App;
