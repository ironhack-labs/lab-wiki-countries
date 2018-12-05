import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail/CountryDetail'
import countriesJSON from './countries.json'
import CountryInformation from './components/CountryInformation/CountryInformation';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(){
    super()
    this.state ={
      countries: countriesJSON
    }
  }
  render() {
    return (
      <div className="App">
         <Switch>
         <Route exact path='/:cca3' component={CountryInformation}/>
          <CountryInformation countries={countriesJSON}/>
        </Switch>
      <CountryDetail countries={countriesJSON} />

     
       
      </div>
    );
  }
}

export default App;
