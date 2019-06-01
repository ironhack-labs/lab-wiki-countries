import React, { Component } from 'react'
import countries from '../data/countries.json'
import { Link } from 'react-router-dom'


class CountryList extends Component {
  state = {
    country: {}
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params
    const country = countries.find(country => country.cca3 === id)
    this.setState({ country })
  }

  render() {
    console.log(this.state.country)
    const { country } = this.state
    return country.name ? (
      <div className="col-5">
        <h1>{country.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{`${country.area} km`}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ol>
                  {country.borders.map((elem, index) => <li key={index}><Link to={`/${elem}`}>{elem}</Link></li>)}
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ) : null;
  }
}

export default CountryList 