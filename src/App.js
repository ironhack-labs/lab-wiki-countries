import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json';

import './App.css';


class App extends React.Component {
  state = {
    countries: countries
  };



    render() {
        return (
          <div className="App">
            <Navbar />
              <div class="container">
              <div class="row">
              <CountriesList />
            <Switch>
              <Route exact path="/:countryId"  render={(reactRouterProps) => ( <CountryDetails {...reactRouterProps} countries={this.state.countries} /> )} />
              {/* Composing into a Component*/}
              {/* <Route component={Error} /> */}
            </Switch>
              </div>
              </div>
          </div>
        )
    }
}

export default App;