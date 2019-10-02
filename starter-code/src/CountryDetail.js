import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    return (
      <div>
        {/* <p>{JSON.stringify(this.props.borders)}</p> */}
        <h1>{this.props.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
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
                      {/* {JSON.stringify(this.props.getCountry("KEN"))} */}
                      {this.props.borders.map((border, idx) =>(
                        <li> <Link to={border} key={idx}>{this.props.getCountry(border).name.common}</Link> </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    )
  }
}
