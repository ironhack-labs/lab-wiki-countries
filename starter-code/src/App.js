import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { Switch, Route} from 'react-router-dom';
import CountryDetail from './components/countryDetail/CountryDetail.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">Aula de Alemao :) !</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                <ul>
                  {countries.map((country) => {
                    return ( 
                      <li key={country.cca3} style={{listStyle: 'none'}}>
                        <Link className="list-group-item list-group-item-action" to={`${country.cca3}`}>{country.flag} {country.translations.deu.common}</Link>
                      </li> 
                    )
                  })}
                </ul>
              </div>
            </div>
            <Switch>
              <Route exact path='/'/>
              <Route excat path='/:id' component={ CountryDetail }/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
