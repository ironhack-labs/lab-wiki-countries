import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import { Link, Switch, Route } from 'react-router-dom'
import CountryDetails from './components/CountryDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map((valor, key ) => {
                return(
                <div key={key}>
                    <Link to={`/countries/${valor.cca3}`} className="list-group-item list-group-item-action"><span>{valor.flag}</span>{valor.name.common}</Link>
                </div>)
              })}
            </div>
          </div>
          <div className="col-7">
              <Switch>
                <Route exact path='/countries/:cca3' component={CountryDetails} />
              </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
