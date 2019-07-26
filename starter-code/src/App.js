import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetail from './Component/countryDetail';
import Nav from './Component/Nav';

class App extends Component {
  render() {
    return (
<div>

  <Nav />

<Switch>

<Route exact path="/CountryDetail/:theId" component={CountryDetail} />

</Switch>

</div>

    );
  }
}

export default App;
