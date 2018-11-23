import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail/CountryDetail';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/:id" render={ props => <CountryDetail data={this.props.data} {...props} /> } />
      </Switch>
    );
  }
}

export default Router;