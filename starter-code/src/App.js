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
          <div className="container">
            <div className="row">
            < CountryList />

                  <Switch>
                    <Route exact path='/:id' component={CountryDetails}></Route>
                  </Switch>
           
            </div>
          </div>
      </div>
    );
  }
}

export default App;
