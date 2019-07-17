import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import countries from './countries.json'
import Country from './components/Country/Country';
import CountryExtended from './components/CountryExtended/CountryExtended';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }
  render() {
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
              <div className="col-5" style={{ height: "90vh", overflow: "scroll" }}>
                <div className="list-group">
                  {this.state.countries.map((country, idx) =>
                    <Country cca3={country.cca3} flag={country.flag} name={country.name.common} rafa={idx}></Country>
                  )}
                </div>
              </div>
                  <Switch>
                    <Route exact path='/:idx' render={(props) => {
                      var choosenCountry = props.match.params.idx
                      console.log(choosenCountry)
                      
                      return <CountryExtended  specificCountry={this.state.countries[choosenCountry]} ></CountryExtended>
                    }} />
                  </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
