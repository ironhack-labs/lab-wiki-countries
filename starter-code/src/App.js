import React, { Component } from 'react';
import './App.css';
import countries from './countries.json'
import CountryDetails from './CountryDetail.js'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    const colStyle = {
      maxHeight: '90vh',
      overflow: 'scroll'
    };


    const countryList = countries.map(a => {
      const link = '/' + a.cca3
      return <Link to={link} className="list-group-item list-group-item-action">{a.name.official}</Link>
    })
    return (
      <div className="App">
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
                <Route exact path='/:cca3' component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
