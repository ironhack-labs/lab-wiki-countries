import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <div>
        WiKi Countries
        <CountriesList />
        <Switch>
          <Route
            exact
            path="/countries/:idd"
            render={props => <CountryDetail {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
