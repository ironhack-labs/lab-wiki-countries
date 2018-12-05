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

        {
          this.state.countries.map(country => <h5>{country.name.common}</h5>)
        }

     </div>
  );
    
  }  
}


