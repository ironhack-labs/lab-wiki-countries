//1. importaciones
import React, { Component } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';


export default class App extends Component {

  state = {}

  render(){
    return (
      <div>
        <NavBar/>
        <div class="container">
          <div class="row">
            <CountriesList/>
            <CountryDetails/>
          </div>
        </div>
      </div>
    );
  }
}

