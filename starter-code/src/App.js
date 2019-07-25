import React, { Component, Fragment } from 'react';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="container">
          <div className="row">
            <CountryList countries={countries}/>
            <Switch>
              <Route
                path='/:countryId'
                component={CountryDetails}
              />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
