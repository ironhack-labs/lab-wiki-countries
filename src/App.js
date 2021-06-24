import React from 'react';
import { Route } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import countriesJSON from './countries.json';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  constructor(props) {
    super();
    this.state = { countriesArrayList: [...countriesJSON] };
  } //constructor bracket
  render() {
    return (
      <div>
        <NavBar />

        <div>
          <CountriesList></CountriesList>

          <Route path="/countryCode/:id" component={CountryDetails} />
        </div>
      </div>
    );
  } //render bracket
} // class bracket

export default App;

/* <CountryDetails key={index2} country={item}></CountryDetails> */
