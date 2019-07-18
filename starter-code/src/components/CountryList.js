import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import data from '../countries.json'

class countryList extends Component{
  state={
    countries: data
  }

  render(){
    const {countries} = this.state
    return(
      <>
      <div class="container">
      <div class="row">
      <div class="col-5"></div>
      <div class="list-group">
      {countries.map(country => (
          <div key={country.cca3}>
            <Link to={`/country/${country.cca3}`}>
            <button class="list-group-item list-group-item-action"><span>{country.flag}</span>{country.name.common}</button>
            </Link>
          </div>
        ))}
      </div>
      </div>
      </div>
      </>
    )
  }
}

export default countryList