import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';

import './App.css';
const name = 'Andréxsss';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <CountriesList countriesList={countries} dimitri={name} age="28" />
      </>
    );
  }
}

/*
let props = {
  countriesList: countries,
  dimitri: name,
  age: "28"
}
*/
export default App;
