import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries';
import CountryDetail from './CountryDetail';
import Detail from './Detail'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


render() {
  return (
    <div className="App">
      <h1> Wiki Countries</h1>
      <div>
        {countries.map(country => 
                                  <CountryDetail country={country}/>
        )}
      </div>
      <Switch>
        <Route exact path="/:id" component={Detail}/>
      </Switch>
    </div>
  );
}
}

export default App;
