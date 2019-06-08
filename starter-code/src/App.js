import React, { Component } from 'react';
import './App.css';
import countries from './constants/countries.json';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default App;
