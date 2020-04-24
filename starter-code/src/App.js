import React, { Component } from 'react';
import CountryDetail from './components/CountryDetail';
import countries from './countries.json';
import { Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {

  showCountries = () => {
    return countries.map((item, index) => {
      return <Link key={index} className="list-group-item list-group-item-action" to={`${item.cca3}`}><img className='flag' src={`https://www.countryflags.io/${item.cca2}/flat/64.png`} alt="flag"/> {item.name.common}</Link>
    })
  }

  render() {
    return (
      <div id="root">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.showCountries()}
            </div>
          </div>
          <Route exact path='/:id' component={CountryDetail} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;