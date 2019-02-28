import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import CountryDetails from "./CountryDetails"
import Country from "./countries.json"
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {


    const countryList =
      Country.map((country) => {
        return (
          <Link className="list-group-item list-group-item-action" key={country.id} to={country.cca3}> {country.name.common} {country.flag} </Link>
        )
      })

    return (
      <div className="App" >
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                <a>{countryList}</a>
              </div>
            </div>
            <Switch>
              <Route exact path="/:cca3" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div >
    )
  }
}


export default App;
