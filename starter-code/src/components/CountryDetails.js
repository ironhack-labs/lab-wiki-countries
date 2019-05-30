import React, {Fragment} from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

class CountryDetails extends React.Component {
  state = {
    country: {}
  }

  render() {
    const cca3 = this.props.match.params.cca3;
    const country = countries.find(country => country.cca3 === cca3);
    const list = country.borders.map((item,i) => {
      const borderCountry = countries.find(country => country.cca3 === item)
      const nameCountry = borderCountry.name
      return <li key={i}><Link to={`/${item}`}>{item}</Link></li>
    })
    return (
      <Fragment>
        <div className="col-7">
                  <h1>{country.name.official}</h1>
                  <table className="table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{country.capital}</td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>{country.area} km
                          <sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>Borders</td>
                        <td>
                          <ul>
                            {list}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
      </Fragment>
    )
  }
}

export default CountryDetails