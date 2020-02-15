import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CountryDetail from './components/CountryDetail'; 
import CountryList from './components/CountryList';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch> 
          <Route exact path='/' component={CountryList}/>
          <Route exact path='/detail' component={CountryDetail}/>
      </Switch>

    );
  }
}

export default App;
