import React, { Component } from 'react';
import countries from './countries.json';
import './App.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Countries from './Countries';
import CountryDetail from './CountryDetail';

class App extends Component {
  constructor() {
    super()

    this.state = {
      countries: countries,
    };

  }

  render() {
    const { countries } = this.state;
    return (
    <div className="App">

      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/"> WikiCountries</Link>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <Countries countries={countries}/>
          <div className="col-7">
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    
    </div>
  );
}
}

export default App;
