import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import CountryDetail from './CountryDetail';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={CountryDetail}/>
          <Route exact path="/:country" component={CountryDetail}/>
          <Route render={()=><Redirect to="/"/>}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
