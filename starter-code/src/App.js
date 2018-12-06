import React, { Component } from 'react';
import './App.css';
import CountryDetails from './Components/CountryDetails'
import CountryItem from './Components/ItemCountry'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="countries">
         <Switch>
            <Route path="/:countryCode" component={CountryItem}/>
          </Switch>
          <CountryDetails />
         
        </div>
      </div>
          
    );
  }
}

export default App;
