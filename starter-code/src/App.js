import React, { Component } from 'react';
import './App.css';
import Navbar from './misc/Navbar';
import CountryDetails from './components/CountryDetail';
import countriesData from './data/countries.json'

class App extends Component {
  state = {
    data: [...countriesData]
  }

  render(){
    return (
      <div className="App">
        <Navbar/>

        <CountryDetails countries={this.state.data}/>
      </div>
    )
  }
}

export default App;
