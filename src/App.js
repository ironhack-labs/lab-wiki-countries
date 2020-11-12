import React, { Component } from 'react';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';

class App extends Component {
  state ={
    countries
  }

  componentDidMount = async () => {
    const countries = await axios.get('https://countries.tech-savvy.tech/countries ')
    this.setState({countries})
  }


  render() {

    return (
      <div className="App" >
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries= {countries} />
            <Switch>
              <Route exact path='/countries/:cca3' render={props => (<CountryDetails {...props} countries={countries}/> )} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
