import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import countries from '../countries.json'

export default class CountryList extends Component {

  state = {
    countries: [...countries]
  }

  render() {
    return (
      <div className="list-group">
        {this.state.countries.map(country => {
          return <NavLink
            className="list-group-item list-group-item-action"
            to={`/${country.cca3}`}
            key={country.cca3}>
            {country.flag} {country.name.official}
          </NavLink>
        })}
      </div>

    )
  }
}
