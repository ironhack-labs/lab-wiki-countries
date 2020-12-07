import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import data from './countries.json'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import Navbar from './components/Navbar';
import { Route, Link, Switch } from "react-router-dom";


class App extends Component{
  state = {
    countries: [],
    loaded: false
  }

  componentDidMount() {
    this.setState({
      countries: data,
      loaded: true
    })
  }

  render() {
    // console.log('State variable countries', this.state.countries)
    if(!this.state.loaded) {
      return <div>Loading...</div>
    }
   
    return (
      <div className="App">
        <Navbar />
        <div className='Body'>
        <CountriesList countries={this.state.countries} />
        <Route 
          exact
          path='/:ccn3' 
          //component={CountryDetails} 
          render={(reactRouterProps) => {
            return <CountryDetails {...reactRouterProps} countries={this.state.countries} />  
          }}
        />
        </div>
      </div>
    );
  }
}

export default App;

