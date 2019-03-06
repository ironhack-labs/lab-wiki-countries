import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CountryList from './components/CountryList.js'
import CountryDetails from './components/CountryDetail.js'
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar />
        < CountryList />

        <div className="country-details">
              <Switch>
                <Route exact path='/:id' component={CountryDetails}></Route>
              </Switch>
        </div>
      </div>
    );
  }
}

export default App;
