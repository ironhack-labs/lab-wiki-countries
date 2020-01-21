import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class CountryDetail extends Component{
    render(){
    return (<div class="col-7">

    <h1>{this.props.country.name.official}</h1>

    <table class="table">

      <thead></thead>

      <tbody>

        <tr>

          <td style={{width: '30%'}}>Capital</td>

          <td>{this.props.country.capital}</td>

        </tr>

        <tr>

          <td>Area</td>

          <td>{this.props.country.area} km

            <sup>2</sup>

          </td>

        </tr>

        <tr>

          <td>Borders</td>

          <td>

            <ul>

              {this.props.country.borders.map((border, i) => <li key={i}><Link to={`/${border}`}>{border}</Link></li>)}

              {/* <li><a href="/AND">Andorra</a></li>

              <li><a href="/BEL">Belgium</a></li>

              <li><a href="/DEU">Germany</a></li>

              <li><a href="/ITA">Italy</a></li>

              <li><a href="/LUX">Luxembourg</a></li>

              <li><a href="/MCO">Monaco</a></li>

              <li><a href="/ESP">Spain</a></li>

              <li><a href="/CHE">Switzerland</a></li> */}

            </ul>

          </td>

        </tr>

      </tbody>

    </table>

  </div>)
    }
}

export default CountryDetail;