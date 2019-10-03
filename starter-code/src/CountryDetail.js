import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import countries from "./countries"

export default class CountryDetail extends Component {
  render() {

    let id = this.props.match.params.id

   let countryId = countries.find(theCountry =>{
      return theCountry.cca3 === id
    })

   console.log(id)
    return (
      <div>

        <h1> {countryId.name.official}</h1>
        
        
      
      </div>
    );
  }
}
