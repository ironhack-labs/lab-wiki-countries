import React, { Component } from 'react'
import countries from './countries.json'
import Details from './Details.js'
import { Link } from "react-router-dom"
// import { Link } from 'react-router-dom';



export default class Home extends Component {


  state = {
    countriesList:countries
 }

 showListOfCountries=()=>{
  return this.state.countriesList.map((eachCountry, i)=> {
    return(
      <Link key ={i} className="list-group-item list-group-item-action active" to={eachCountry.cca3}>{eachCountry.name.common}</Link>
    )
  })

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
          <div className="col-5" >
            <div className="list-group">
              {this.showListOfCountries()}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
    )
  }
}
