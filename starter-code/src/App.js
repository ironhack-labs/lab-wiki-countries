import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



class App extends Component {
  
  render() {
  const colStyle = {
    maxHeight: '90vh', 
    overflow: 'scroll'
  };
 
  const countryList = countries.map((el) => {
    const link ="/"+el.cca3;
    return (
      <Link to={link} className="list-group-item list-group-item-action" >{el.name.common}</Link>
    )
  });
    return (
      <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={colStyle}>
            <div className="list-group">
              {countryList}
            </div>
          </div>
          <Switch>
            <Route exact path="/:cca3" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
