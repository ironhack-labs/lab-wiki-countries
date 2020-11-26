import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'
import NavBar from './components/NavBar'

function RouterApp() {
  return (
    <Router>
    <NavBar></NavBar>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={CountryDetails} path='/countries/:cca3' />
      </div>
    </Router>
  );
}

export default RouterApp;

