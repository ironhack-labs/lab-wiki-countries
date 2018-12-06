import React, { Component } from 'react'

class Countries extends Component {
  render() {
    var countriesResult = this.props.countries.map((country)=> <li>{country.flag + country.name.common}</li>)
    return (
      <div>
         <h2>Countries</h2>
        <ol>
          {countriesResult}
        </ol>
      </div>
    )
  }
}

export default Countries;