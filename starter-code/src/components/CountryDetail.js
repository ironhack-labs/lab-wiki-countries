import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import countries from '../data/countries.json'

class CountryDetail extends Component {
  state = {
    country: {}
  }

  componentWillReceiveProps() {
    const { id } = this.props.match.params
    console.log(id)
    const country = countries.find(country => country.cca3 === id)
    this.setState({ country })
  }


  render() {
    console.log(this.state.country)
    const { country } = this.state
    return country.name ? (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{"width": "30%"}}>Capital</td>
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
                  {country.borders.map((a,i) => <li key={i}><Link to={`/${a}`}>{a}</Link></li>)}
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )  : null;
  }
}

export default CountryDetail