import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail'
import CountryList from './components/CountryList'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="bg-primary w-100 text-center text-white">Wiki Countries</h1>
        <div className="container w-100">
        <CountryList/>
          <Switch>
            <Route exact path='/:id' component={CountryDetail}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
