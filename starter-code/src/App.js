import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries';
import CountryDetail from './CountryDetail';
import Detail from './Detail'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <a className="navbar-brand"   >WikiCountries</a>
        </div>
        <div className="container">
          <div className="col-xs-4">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {countries.map(country =>
                  <CountryDetail country={country} />
                )}
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/:id" component={Detail} />
        </Switch>

      </div>
    );
  }
}

export default App;
