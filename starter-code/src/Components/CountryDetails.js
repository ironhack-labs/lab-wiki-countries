import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CountryDetails extends Component {
  
  render() {
    return (
      <div key={CountryDetails.cca3}>
        {this.props.listCountries.map((list, idx)=>
          <Link to={`/${CountryDetails.cca3}`} className="list-group-item list-group-item-action">{CountryDetails.name.common}</Link>
          
        )}
      </div>
    )
  }
}
