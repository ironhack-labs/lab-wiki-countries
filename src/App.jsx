import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json'

import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import './App.css';

class App extends React.Component {

  state = {
    countries: countriesJSON
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <CountriesList countries={this.state.countries}/>

          <Switch>
            <Route path="/countries/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
