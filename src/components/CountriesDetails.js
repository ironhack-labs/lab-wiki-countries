import React from 'react'
import { Link } from 'react-router-dom'

const CountriesDetails = props => {

    return (
        <div class="col-7">
            <h1>{props.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{props.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {props.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>{props.borders}</td>
                  <td>
                    <ul>
                      <li><a href="/AND">{props.borders[0]}</a></li>
                      <li><a href="/AND">{props.borders[1]}</a></li>
                      <li><a href="/AND">{props.borders[2]}</a></li>
                      <li><a href="/AND">{props.borders[3]}</a></li>
                      <li><a href="/AND">{props.borders[4]}</a></li>
                      <li><a href="/AND">{props.borders[5]}</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountriesDetails