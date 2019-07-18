import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CountrieDetail extends Component {
    render() {
        return (
        
            <div class="col-7">
            <h1>{this.props.country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{this.props.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.props.country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><Link/></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}
