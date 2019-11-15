 
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json'
import CountryDetail from './CountryDetail';
import { Switch, Route, Link } from 'react-router-dom';

console.log(countries)
class App extends Component {
  
  showCountries = () => {
    return countries.map(eachCountry => {
      return <li key={eachCountry.cca3}>
              <Link  className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
            </li>
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>

      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
            {this.showCountries()}

            </div>
          </div>
        </div>
      </div>


        <Route exact path="/country/:id" 
          component={(props) => <CountryDetail {...props} countries={countries} />
          } />

     
        {/* <CountrDetail /> */}
      </div>
    );
  }
}


export default App;