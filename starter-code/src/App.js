import React, { Component } from 'react';
import './App.css';
import List from './components/list/List.js';
import Info from './components/info/Info.js';
import Nav from './components/nav/Nav.js';
import Countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="flex-thing">
         <List countries={Countries} />
          <div className="info-place">
            <Route path='/info/:countrycode' component={Info}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;