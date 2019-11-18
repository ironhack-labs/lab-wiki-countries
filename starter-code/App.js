import React, { Component } from 'react'
import countries from "./countries.json"
import CountryDetail from "./components/country-detail/countryDetail"
import './App.css';
import {Route, Link } from 'react-router-dom';

export default class App extends Component {

  showCountries = () => {
    return countries.map((eachCountry, i) => {
      return <li key = {i}>
              <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
             </li>
    })
  }

  render() {
    // console.log(this)
    // console.log(countries)
    // console.log(this.props)

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


        {/* whenever you go to the url /country/whatever it will load the CountryDetail component */}
        <Route exact path="/country/:id" component={(props) => <CountryDetail {...props} countries = {countries} />}/>


        {/* <Route exact path="/country/:id" component={CountryDetail}/> */}

      </div>
    )
  }
}

