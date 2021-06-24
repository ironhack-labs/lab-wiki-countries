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
    const { countriesArrayList } = this.state;
    return (
      <div>
        <NavBar />

        {countriesArrayList.map((item, index1, index2) => {
          return (
            <div>
              <Route exact path="/">
                <CountriesList key={index1} country={item}></CountriesList>
              </Route>
              <Route path="/details">
                <CountryDetails key={index2} country={item}></CountryDetails>
              </Route>
            </div>
          );
        })}
      </div>
    );
  } //render bracket
} // class bracket

export default App;
