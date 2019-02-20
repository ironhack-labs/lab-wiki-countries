import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              <div className="list-group">
                <ul>
                {countries
                  .map((country) => {
                    return <li
                              key={country.cca3}
                              style={{listStyle: "none"}}>
                            <NavLink 
                              className="list-group-item list-group-item-action"
                              to={`/${country.cca3}`}>{country.flag} {country.name.common}
                            </NavLink>
                           </li>
                })}
                </ul>
              </div>
            </div>
            <Switch>
              <Route exact path='/'/>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
