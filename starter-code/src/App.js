
import React, { Component } from 'react'
import './App.css';
import countries from './countries.json'
import CountryDetail from './CountryDetail'
import {Route, Link } from 'react-router-dom'

console.log(countries[0].name.common);

export class App extends Component {

//Loop through JSON array to show countries and define country Links using cca3 property from JSON object
          showCountries = ()=>{
          return countries.map((eachCountry,i)=>{
            return(
              <li className="list-group-item list-group-item-action" key={i}>
                <Link to={`/country/${eachCountry.cca3}`} style={{color:"black", textDecoration:"none"}}>{eachCountry.flag} {eachCountry.name.common}</Link>
              </li>
              )
          })
          }

  render() {
    return (
    <div>
   
   <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
    <div class="container">
    <div class="row">
        <div className="col-5" style={{maxHeight:'90vh', overflow:'scroll'}}>
        <div className="list-group">
        {this.showCountries()}
        </div>
          </div>
        {/* when you go to a specific country code it shows that component */}
        {/* -> can either do it like this: <Route exact path="/country/:id" component={CountryDetail} /> or pass props as below */}
        <Route exact path="/country/:id" 
        component={ (props)=><CountryDetail {...props} countries={countries}/>} /> 
          </div>
          </div>
      </div>
    )
  }
}

export default App







