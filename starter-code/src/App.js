import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CardView from './components/CardView'
import CardDetail from './components/CardDetail'

class App extends Component {
  
  state = {
    allCountries: countries
  }
  
  render() {

    return (
      <div className="App">
       <CardView/>
       <CardDetail/>
      </div>
    )
  }
}

export default App;
