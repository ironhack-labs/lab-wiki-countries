import countriesList from '../countries.json';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Countrieslist from './Countrieslist';
import 'bootstrap/dist/css/bootstrap.css';
import Countrieselement from './Countrieselement';





class Countrydetails extends Component {
  render() {
    const currentCountry = this.props.match
    const codeCountry = this.props.match.params.code
    console.log(codeCountry)
    const selectedCountry = this.props.countries.filter((element) => element.cca3 === codeCountry)
    console.log(selectedCountry[0].borders)
    let countryDetail = selectedCountry[0]
    let borders = []
    countryDetail.borders.map((border) =>{
      // console.log(border)
      let coutriesFilteredBorder = this.props.countries.find((country) =>  country.cca3 === border)
      // console.log(coutriesFilteredBorder)
      borders.push(coutriesFilteredBorder)
    })
    console.log(borders)
    
    
    
    
    
    
    
    return (
      <ul className="list-group list-group-flush mw-100 p-3 list-group">
        <li className="list-group-item fs-1 fw-bold">{selectedCountry[0].name.official}</li>
        <li className="list-group-item"><span className= ' pe-5'> Capital </span>{selectedCountry[0].capital}</li>
        <li className="list-group-item"><span className= ' pe-5'> Area </span>{selectedCountry[0].area} Km<sup>2</sup></li>
        <li className="list-group-item"><div className= ' pe-5 d-flex'>    <p className= ' pe-5'>Borders</p> <p>{borders.map((element) => <li> {element.name.official} </li>)} </p> </div> </li>
        
        
    </ul>
    )
  }
}





export default Countrydetails