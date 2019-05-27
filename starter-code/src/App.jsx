import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import CountryDetail from './CountryDetail';

class App extends Component {
  state = {};
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/country/:id" component={CountryDetail} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
