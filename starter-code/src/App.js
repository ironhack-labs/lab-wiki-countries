import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Countries from './countries.json';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      countriesList: [...Countries],
      countryDetail: {
        name: "France",
        capital: "Paris",
        area: "551695 km",
        borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"]
      }
    }
  }

  identifyCountry(code) {

    let countriesListCopy = [...this.state.countriesList]
    let countryFound = countriesListCopy.filter(elm => elm.cca3 === code)
    

    
    let bordersName = [];
    for (let border in countryFound[0].borders) {
      let countryByCode = countriesListCopy.filter(elem => elem.cca3 === countryFound[0].borders[border])
      console.log(countryByCode[0].name.common)
      bordersName.push(countryByCode[0].name.common)
    }
    
    let countryDetail2 = {
      name: countryFound[0].name.common,
      capital: countryFound[0].capital,
      area: countryFound[0].area,
      borders: countryFound[0].borders,
      bordersName: bordersName
    }

    return countryDetail2
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" id="list-of-countries">
              <div className="list-group">
                {this.state.countriesList.map((country, idx) => <a key={idx} className="list-group-item list-group-item-action" href={'/' + country.cca3}>{country.flag} {country.name.common}</a>)}
              </div>
            </div>
            <Switch>
              <Route
                path="/:countryCode"
                render={(props) => {
                  let chosenCountry = props.match.params.countryCode;
                  return (<CountryDetail payLoad={this.identifyCountry(chosenCountry)}></CountryDetail>)
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}


