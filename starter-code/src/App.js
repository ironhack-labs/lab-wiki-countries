import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetails from './Components/CountryDetails';
// import { Link } from 'react-router-dom'
// import CountryDetails from './Components/CountryDetails';

class App extends Component {
  constructor() {
    super()
    this.state = {
      listCountries: [...countries]
    }
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.listCountries)}
        <CountryDetails listCountries={this.state.listCountries}/>
      </div>
    );
  }

}

export default App;
