import React, { Component } from 'react';
import countries from '../../countries.json'
import CountryDetail from '../countryDetail/CountryDetail'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';

const styles = {
  maxHeight: '80vh',
  overflow: 'scroll', 
};

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <Link className="navbar-brand" to="/">WikiCountries</Link>
            </div>
          </nav>
          <div className="conteiner">
            <div className="row">
              <div className="col-5" style={styles}>
                <div className="list-group">
                {
                  countries.map(country => <Link key={country.cca3} className="list-group-item list-group-item-action" to={`/${country.cca3}`}><span>{country.flag} {" " + country.name.common}</span></Link>)
                }
                </div>
              </div>
              <Switch>
                <Route exact path='/' />
                <Route path='/:id' component={CountryDetail}/>
              </Switch>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
