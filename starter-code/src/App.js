import React, { Component } from 'react';

import './App.css';
import Country from './components/Country'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
       
        </header>
        <Country/>
        <Switch>
          <Route path='./components/Country' component ={Country}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
