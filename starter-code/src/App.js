import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail.js'
import Countries from './countries.json'
import 'bootstrap/dist/css/bootstrap.css';
import './components/CountryDetail/CountryDetail.css';
let CountriesList = Countries;

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      countries: CountriesList 

    }
  }
  
  
  render() {
    return (
      <div className="App">
      <div className="list-group">
      <a href="#" class="list-group-item list-group-item-action active">Wiki Countries</a>
          { this.state.countries.map((country,index) => 
          <CountryDetail key={index} flag={country.flag} name={country.name.official} link={country.cca3} className="list-group-item list-group-item-action width"/>) 
          }
          </div>
      </div>
    );
  }
}

export default App;
