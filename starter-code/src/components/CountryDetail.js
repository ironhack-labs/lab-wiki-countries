import React, {Component} from 'react'
import Countries from '../countries.json'
import { Route, Link, Switch, withRouter } from "react-router-dom";

class CountryDetail extends Component{

  findTheCountry(country){
    return Countries.find(countryOfArray =>{
      return countryOfArray.cca3 === country
    })
  }

  getTheBorderCountries(country){
    return <li>
              <Link to={country}>{this.findTheCountry(country).name.common}</Link>
            </li>
  }
 

  render(){
    const country = this.findTheCountry(this.props.match.params.id)

    return(
      <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((country) => { 
                  return this.getTheBorderCountries(country)
                })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    )
  }
}


export default CountryDetail