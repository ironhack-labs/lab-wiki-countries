import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import CountryDetail from './components/CountryDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/CountryDetail/:id' component={CountryDetail}/>
  </Switch>
);

export default Routes;