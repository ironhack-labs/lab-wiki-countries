import React, { Component } from 'react';
import CountryDetail from './components/CountryDetail'
import Country from './components/Country'
import './App.css';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="list-group-item list-group-item-action active">Wikicountries</h1>
        <div className="row">
          <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1>Countries</h1>
            <div className="list-group">
              <Route path='/' component={Country} />
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
