import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {CountriesList} from './components/CountriesList';
import ListCountries from './countries.json';
import {CountryDetails} from './components/CountryDetails';
import Routes from './Routes'

class App extends Component {
  state = {
    listC:ListCountries,
  }
  render (){
    const {listC} = this.state;

  return (
    <div className="App">
      <span>Wiki Countries</span>
      <Navbar/>
      <div className='row-app'>
      <CountriesList data={listC} />
      <Routes />
      </div>
    </div>
  );
  }
}

export default App;
