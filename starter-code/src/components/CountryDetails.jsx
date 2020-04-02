import React, { Component } from 'react'
import countries from "../countries.json"
import {Link} from "react-router-dom"
class CountryDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 countries:countries
        }
    }

    render() {

        let leCountry=this.state.countries.find((arg)=>arg.cca3 === this.props.match.params.cca3)
        return (


            <div class="col-6">
            <h1>{leCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{leCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{leCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {leCountry.borders.map((country) => (
                      <li>
                          <Link to={`/country-details/${country}`}>
                             {country}
                          </Link>
                          </li>
                    ))};
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}

export default CountryDetails
