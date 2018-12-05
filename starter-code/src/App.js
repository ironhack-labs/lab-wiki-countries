import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListCountries from './components/ListCountries/ListCountries.js'
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail/CountryDetail';

class App extends Component {

  constructor() {
    super()
    this.state = {
      country: countries.map((country) => country)
    }
  }

  render() {
    return (
      <div className="App">
       
          <div className="prueba">
            {this.state.country.map(country => <ListCountries {...country} />)}
          </div>
      
        <Switch>
      
        <Route exact path='/countrydetail/:cca3' component={CountryDetail}/>

      </Switch>
      </div>
    );
  }
}

export default App;
