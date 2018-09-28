import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import CountryDetail from './components/CountryDetail';

// exact path prevents other things from showing at the same time
class App extends Component {
  render() {
    return (
      <div className="App">
         <Switch>
          <Route  exact path='/' component={Main}/>
          <Route  exact  path='/countries' component={Main}/>
          <Route  exact  path='/countries/:name' component={CountryDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
