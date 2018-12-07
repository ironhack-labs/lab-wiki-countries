import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="list-group-item list-group-item-action active"><h2>WikiCountries</h2></div>
           
          <div className="styling">
            <div>
           <CountryList/>
           </div>
           <div className="details">
            <Switch>
              <Route exact path="/country/:cca3" component={CountryDetails} />
            </Switch>
             </div>
          </div>
         
     
      
    </div>
    );
  }
}

export default App;
