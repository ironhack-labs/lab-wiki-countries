import React, { Component } from 'react';
import Countries from '../countries.json';
import { Link } from 'react-router-dom';
import '../App.css';

class CountryDetail extends Component {
 
  showCountryDetails() {
    let lookingFor = this.props.match.params.country;
    return Countries
    .filter(country=> {
      return country.cca3.includes(lookingFor)
    })
    .map((country, i)=> {
      return (
        <div key={i} className="m-3 p-2">
          <div className="row"><h1>{country.name.common}</h1> </div>
          <div className="row">
              <div className="col-2">Capital:</div> 
              <div className="col-3">{country.capital[0]}</div>
          </div>
          <div className="row">
              <div className="col-2">Area:</div> 
              <div className="col-3">{country.area} km <small>2</small> </div>
          </div>
          <div className="row">
              <div className="col-2">Borders:</div> 
              <div className="col-3" >
                <ol className="no-padding">
                  {this.showBorders()}
                </ol>
              </div>
              </div>
        </div>
      )
    })
  }

  showBorders() {
    let lookingFor = this.props.match.params.country;
    let theCountry = Countries
    .filter(country=> {
      return country.cca3.includes(lookingFor)
    })

    if(theCountry[0].borders.length > 0) {
      return theCountry[0].borders
      .map((country, i) => {
        return (
          <li key={i}> <Link to={`${country}`}>{this.getCountryName(country)}</Link></li>
          )
        })
      }
  }

  getCountryName(country) {
    let temp = Countries.filter(eachC=> {
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