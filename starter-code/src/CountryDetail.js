import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
  render() {
      
    // hacer map para recorrer?

    return (
        <React.Fragment>
          <h1>Aruba</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>Capital</td>
                <td></td>
              </tr>
              <tr>
                <td>Area</td>
                <td>km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      )
    }
  }