import React, {Component} from 'react';
import './App.css';
import CountryDetails from './CountryDetail/CountryDetail'
import countries from './countries.json'
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }
  render() {
    return (

      <>
      
      <CountryDetails></CountryDetails>
      </>
    );
  }
}

export default App;
