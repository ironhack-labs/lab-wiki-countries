import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CountryDetails from './Components/CountryDetail'
import CountryList from './Components/CountryList'
import Nav from './Components/Nav'
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <Fragment>

        <Nav />
        <Switch>
          <Route exact path="/CountryDetails/:id" component={CountryDetails} />
        </Switch>
        <Home />

      </Fragment>
    );
  }
}

export default App;
