import React, { Component } from 'react'

export default class CountryDetail extends Component {
    render() {
        return (
            <div>
                <div className="col-7">
              <h1>{this.props.payLoad.name}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{this.props.payLoad.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{this.props.payLoad.area}
                    <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {this.props.payLoad.borders.map((country, idx) => <li key={idx}><a href={country}>{this.props.payLoad.bordersName[idx]}</a></li>)} 
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
        )
    }
}
