import React, { Component } from 'react';
import countries from './countries.json';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCountries: countries,
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
            <h1 className="navbar-brand">Wiki Countries</h1>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div className="list-group">
                {this.state.showCountries.map((country, index) => <Link to={country.cca3} key={index} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
