import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import './CountriesMain.css'

import countriesFromDB from '../../countries.json'

class CountriesList extends Component {
  constructor() {
    super()
    this.state = {
        countries: countriesFromDB
    }
  }

  render() {
    return (
      <>
        <div className="col-5 list">
          <div className="list-group">
            {this.state.countries.map(elm => <Link key={elm.cca3} className="list-group-item list-group-item-action" to={`/country/${elm.cca3}`}><span>{elm.flag}</span>{elm.name.common}</Link>)}
          </div>
        </div>
      </>
    )
  }
}

export default CountriesList