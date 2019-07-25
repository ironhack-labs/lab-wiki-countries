import React, { Component } from 'react';
import allTheCountries from '../countries.json';
import { Link } from 'react-router-dom';
import '../App.css';

class CountryDetail extends Component {
 
  showCountryDetails() {

    let lookingFor = this.props.match.params.country;

    return allTheCountries
    .filter(country=> {
      return country.cca3.includes(lookingFor)
    })
    .map((country, i)=> {
      
      return (
        <div key={i} className="m-3 p-2">

          <div className="row"><h1>{country.name.common}</h1> </div>
          <div className="row">
            
              <div className="col-4">Capital:</div> 
              <div className="col-8">{country.capital[0]}</div>
            
          </div>
          <div className="row">
            
              <div className="col-4">Area:</div> 
              <div className="col-8">{country.area} sq.km</div>
            
          </div>
          <div className="row">
            
              <div className="col-4">Borders:</div> 
              <div className="col-8" >
                <ul className="no-padding">
                  {this.showBorders()}
                </ul>
              </div>
          

        </div>
        </div>
      )
    })
    
  }

  showBorders() {
    let lookingFor = this.props.match.params.country;

    let theCountry = allTheCountries
    .filter(country=> {
      return country.cca3.includes(lookingFor)
    })

    theCountry[0].borders.forEach((country, i) => {

    })

    if(theCountry[0].borders.length > 0) {
      
      return theCountry[0].borders
      .map((country, i) => {
        return (
          <li key={i}> <Link to={`${country}`}>{this.getCountryName(country)}</Link></li>
          )
        })
      }
    else {
      return (
        <div>This country has no land borders</div>
      )
    }
  }

  getCountryName(country) {
    let temp = allTheCountries.filter(eachC=> {
     return eachC.cca3.includes(country)
    })
    return temp[0].name.common
  }

  render() {
    return (
      <div>
        {this.showCountryDetails()}
      </div>
    );
  }
}

export default CountryDetail;