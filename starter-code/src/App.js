import React, { Component } from 'react';
import countries from './countries.json';
import { Route, Link } from "react-router-dom";
import CountryDetail from './Components/CountryDetail'
import './App.css';

class App extends Component {
  showCountries = () => {
    return countries.map((item, index) => {
      return <Link key={index} className="list-group-item list-group-item-action" to={`${item.cca3}`}><img src={`https://www.countryflags.io/${item.cca2}/flat/64.png`} alt=''/> {item.name.common}</Link>
    })
  }
  render() {
    console.log(this.showCountries);
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <h1 className="navbar-brand">Wiki Countries</h1>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <div className="list-group">
              {this.showCountries()}
              </div>
            </div>
            <Route exact path='/:id' component={CountryDetail} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;