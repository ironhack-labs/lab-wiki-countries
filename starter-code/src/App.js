import React, { Component, Fragment } from 'react';
import './App.css';
import countries from './countries.json'
import './countries'
import Countries from './countries';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: countries,
    }
    console.log(this.state);

  }


  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <Switch>
          <Route>
            <Countries country={this.state.countries} />
          </Route>
        </Switch>
      </Fragment>
    );
  }

}

export default App;
