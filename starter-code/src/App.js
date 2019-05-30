import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import countries from './data/countries.json'
import CountryList from './components/CountryList';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="col-5" style={{'height': '90vh', overflow: 'scroll'}}>
                <CountryList countries = {countries}/>
              </div>
            <Switch>
                <Route exact path='/:id' component={CountryList}/>
              </Switch>
     
      </div>
    );
  }
}

export default App;
