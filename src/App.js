import React, {Component} from 'react';
import './App.css';
import {  Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countries from './countries.json'

class App extends Component {
  state ={
    countries
  }
  render(){
    return (
      <div >
            <Navbar />
            <CountriesList countries={countries}/>
            <Route exact path='/countries/:id' component={CountryDetails}/>
        </div>
    );
  }
  
}

export default App;
