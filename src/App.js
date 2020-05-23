import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json'
import { Home, Country } from './pages'

class  App extends React.Component {
  state={
    countries:countries
  }
  render(){
    return (
          <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} countries={this.state.countries}  />}
          />
          <Route
            exact
            path="/:id"
            render={props => <Country {...props} countries={this.state.countries} />}
          />
        </Switch>
    );
  }
}

export default App;
