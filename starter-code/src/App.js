import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import { Switch, Route } from "react-router-dom"
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='country-list'>
          <Country data={countries}/> 
        </div>
        <div className='country-details'>
          <Switch>
            <Route exact path='/countries/:cca3' component={CountryDetails} />
          </Switch>
        </div>

      </div>
      );
    }
  }
    
export default App;
