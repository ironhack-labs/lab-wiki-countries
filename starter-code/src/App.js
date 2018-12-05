import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail';
import countries from './countries.json'

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      countries
    }

  }


  render() {

    return (
      <div>
        {/* <CountryDetail/> */}  

  
        {
          this.state.countries.map(country => <h1>{country.name.common}</h1>)
        }
        
      </div>
    );
    
  }  
}


