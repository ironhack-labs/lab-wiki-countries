import React, { Component } from 'react'

export default class ListCountries extends Component {
  render() {
    return (
      <div className="list-group">
        {this.props.countries.map((country) => {
          return <p onClick={this.props.showCountry} id={country.cca3} className="list-group-item list-group-item-action">
            {country.flag}{country.name.common}
          </p>
        })}
      </div>
    )
  }
}
