
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class CountryDetails extends Component {
    state = {
        infoCountry: {}
    }

    getCountryInfo(code){
        axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then((response) => {
            return this.setState({
                infoCountry: response.data
            })
        })
    }

    componentDidMount(){
      return this.getCountryInfo(this.props.match.params.countrycode)
  }

    componentDidUpdate(){
        return this.getCountryInfo(this.props.match.params.countrycode)
    }

    render() {
        console.log(this.state)
        return (
            <div class="col-7">
            <h1>{this.state.infoCountry.name ? this.state.infoCountry.name : ""}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{this.state.infoCountry.capital ? this.state.infoCountry.capital : ""}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.state.infoCountry.area ? this.state.infoCountry.area : ""} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {
                            this.state.infoCountry.borders ? this.state.infoCountry.borders.map(
                                (border) => {
                                    return (
                                      <li>
                                        <Link to={`/${border}`}>{border}
                                        </Link>
                                        </li>
                                    )
                                }
                            )
                            :
                            ""
                        }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}