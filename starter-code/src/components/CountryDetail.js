import React, { Component } from 'react'
import countries from '../countries.json'
import {NavLink} from 'react-router-dom'

class CountryDetail extends Component {

  render(){
    const { id } = this.props.match.params
    let country = countries.find(c => c.cca3 === id)
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <div className="list-group">
              <h2>{country.name.common}</h2>
              <h4>Capital: {country.capital}</h4>
              <h4>Area: {country.area} km²</h4>
              <h4>Borders:</h4>
              <ul>
                {country.borders.map(item=>{
                  return <NavLink key={item}  to={`/country/${item}`}><li key={item}>{countries.find(c => c.cca3 === item).name.common}</li></NavLink>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryDetail