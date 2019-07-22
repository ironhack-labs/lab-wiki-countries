import React, {Component} from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

class CountryList extends Component {

  state = {
    countries
  }

  render() {
    return(
      <ul className="list-group text-left" style={{height: '90vh', overflow: 'scroll'}}>
        {this.state.countries.map((country, i)=> 
          <li key={i} className="list-group-item list-group-item-action">
            <Link to={`/details/${country.cca3}`}>
            <span> {country.flag} {country.name.common}</span>
            </Link>
          </li>)}
      </ul> 
    )
  }

}

export default CountryList