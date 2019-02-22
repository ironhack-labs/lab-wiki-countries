import React, { Component } from 'react'

export default class CountryDescription extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        <p>Capital: <em>{this.props.capital}</em></p>
        <p>Area: <em>{this.props.area}</em></p>
        <ul><p>Borders: </p><li>{this.props.borders}</li></ul>
      </div>
    )
  }
}
