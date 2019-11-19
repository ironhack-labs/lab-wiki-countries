import React from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from './components/countrydetail';
import countries from './countries.json';

class App extends React.Component {
  showCountries = () => {
    return countries.map((eachCountry, i) => { 
      return (<Link to={`/country/${eachCountry.cca3}`} className="list-group-item list-group-item-action" key={i}>{eachCountry.flag}{eachCountry.name.common}</Link>)
    })
  }
  render() {
    // console.log({countries});
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3 app-title">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
          <div className="row">
            <div className="col-5 country-box">
            <div className="list-group">
              {this.showCountries()}
              </div>
            </div>
            <Route exact path="/country/:id" component={(props) => <CountryDetail {...props} countries={countries} />} />
            
          </div>
      </div>
    </div>
  )
  }
}

export default App;
