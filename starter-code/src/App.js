import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
          <Route exact path="/countries/:id" component={CountryDetail} />
        </Switch>
        
      </div>
    );
  }
}

export default App;