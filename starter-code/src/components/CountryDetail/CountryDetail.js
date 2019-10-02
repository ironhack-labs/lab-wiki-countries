import React, { Component } from 'react'

export default class CountryDetail extends Component {
  constructor(props) {
    super()
    
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.props.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.children}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
